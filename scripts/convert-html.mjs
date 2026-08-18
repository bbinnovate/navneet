import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const sourceDir = path.join(root, "_source");

const ROUTES = {
  home: "/",
  about: "/about",
  topschool: "/topschool-learning-management-system",
  topclass: "/topclass-digital-classroom",
  topassess: "/topassess",
  topseries: "/topseries-grade-1-to-8",
  ifp: "/interactive-flat-panels",
  contact: "/contact",
  conclaves: "/conclaves",
  news: "/news",
  blogs: "/blogs",
  locations: "/locations",
  careers: "/careers",
  support: "/support-services",
};

function readFile(name) {
  return fs.readFileSync(path.join(sourceDir, name), "utf8");
}

/** Fix malformed HTML where closing tags are split across lines (e.g. </button\n  >). */
function normalizeHtml(html) {
  return html
    .replace(/<\/(\w+)\s*\n\s*>/g, "</$1>")
    .replace(/(<[^>]+)\s*\n\s*>/g, "$1>");
}

function extractStyle(html) {
  const match = html.match(/<style>([\s\S]*?)<\/style>/);
  return match ? match[1].trim() : "";
}

function extractBetween(html, start, end) {
  const s = html.indexOf(start);
  if (s === -1) return "";
  const e = html.indexOf(end, s + start.length);
  if (e === -1) return html.slice(s + start.length);
  return html.slice(s + start.length, e);
}

function extractPage(html, pageId) {
  const re = new RegExp(
    `<div id="page-${pageId}" class="page[^"]*">([\\s\\S]*?)(?=<div id="page-|<template id="footer-tpl"|<!-- ═══ SHARED FOOTER|<script>)`,
  );
  const match = html.match(re);
  return match ? normalizeHtml(match[1].trim()) : "";
}

function extractNav(html) {
  return extractBetween(html, "<nav>", "</nav>");
}

function extractFooterTemplate(html) {
  const match = html.match(/<template id="footer-tpl">([\s\S]*?)<\/template>/);
  return match ? match[1].trim() : "";
}

function parseStyleString(styleStr) {
  const obj = {};
  styleStr.split(";").forEach((part) => {
    const idx = part.indexOf(":");
    if (idx === -1) return;
    const key = part.slice(0, idx).trim();
    const val = part.slice(idx + 1).trim();
    if (!key || !val) return;
    const camel = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    obj[camel] = val;
  });
  return obj;
}

function styleObjectToJsx(obj) {
  const entries = Object.entries(obj).map(([k, v]) => {
    const safeVal = v.replace(/'/g, "\\'");
    return `${k}: '${safeVal}'`;
  });
  return `{ ${entries.join(", ")} }`;
}

function escapeJsxText(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;");
}

function convertAttributes(attrs) {
  let result = attrs
    .replace(/\sclass=/g, " className=")
    .replace(/\sfor=/g, " htmlFor=")
    .replace(/\scharset=/g, " charSet=")
    .replace(/\scrossorigin/g, " crossOrigin")
    .replace(/\sreadonly/g, " readOnly")
    .replace(/\smaxlength=/g, " maxLength=")
    .replace(/\stablindex=/g, " tabIndex=");

  result = result.replace(/\sonclick="goPage\('([^']+)'\)"/g, (_, page) => {
    const href = ROUTES[page] || `/${page}`;
    return ` data-nav-href="${href}"`;
  });

  result = result.replace(/\sonclick="toggleFaq\(this\)"/g, ' data-faq-toggle="true"');
  result = result.replace(
    /\sonclick="switchCur\(this,\s*'([^']+)'\)"/g,
    (_, id) => ` data-cur-tab="${id}"`,
  );
  result = result.replace(
    /\sonclick="switchS\(this,\s*'([^']+)'\)"/g,
    (_, id) => ` data-s-tab="${id}"`,
  );

  result = result.replace(/\sstyle="([^"]*)"/g, (_, styleStr) => {
    const obj = parseStyleString(styleStr);
    return ` style={${styleObjectToJsx(obj)}}`;
  });

  return result;
}

function preprocessHtml(html) {
  let src = normalizeHtml(html);

  src = src.replace(
    /<button([^>]*?)href="([^"]+)"([^>]*)>([\s\S]*?)<\/button>/gi,
    (_, before, href, after, content) => {
      const attrs = `${before}${after}`.replace(/\srel="[^"]*"/gi, "");
      const isExternal = /^https?:\/\//.test(href) || href.startsWith("tel:");
      const target = isExternal && !href.startsWith("tel:")
        ? ' target="_blank" rel="noopener noreferrer"'
        : href.startsWith("tel:")
          ? ""
          : "";
      return `<a${attrs} href="${href}"${target}>${content}</a>`;
    },
  );

  src = src.replace(
    /<button([^>]*?)onclick="window\.open\('([^']+)'\)"([^>]*)>([\s\S]*?)<\/button>/gi,
    (_, before, url, after, content) =>
      `<a${before}${after} href="${url}" target="_blank" rel="noopener noreferrer">${content}</a>`,
  );

  src = src.replace(
    /<a([^>]*?)onclick="window\.open\('([^']+)'\)"([^>]*)>([\s\S]*?)<\/a>/gi,
    (_, before, url, after, content) => {
      const attrs = `${before}${after}`.replace(/\srel="[^"]*"/gi, "");
      return `<a${attrs} href="${url}" target="_blank" rel="noopener noreferrer">${content}</a>`;
    },
  );

  src = src.replace(
    /<button([^>]*?)onclick="goPage\('([^']+)'\)"([^>]*)>([\s\S]*?)<\/button>/gi,
    (_, before, page, after, content) => {
      const href = ROUTES[page] || `/${page}`;
      return `<GoPageLink href="${href}"${before}${after}>${content}</GoPageLink>`;
    },
  );

  src = src.replace(
    /<a([^>]*?)onclick="goPage\('([^']+)'\)"([^>]*)>([\s\S]*?)<\/a>/gi,
    (_, before, page, after, content) => {
      const href = ROUTES[page] || `/${page}`;
      return `<GoPageLink href="${href}"${before}${after}>${content}</GoPageLink>`;
    },
  );

  return src;
}

function extractBalancedDiv(html, className) {
  const re = new RegExp(
    `<div[^>]*class="[^"]*\\b${className}\\b[^"]*"[^>]*>`,
    "i",
  );
  const match = html.match(re);
  if (!match) return "";
  const start = match.index;

  let depth = 0;
  let i = start;
  while (i < html.length) {
    if (html.startsWith("<div", i)) {
      depth += 1;
      i = html.indexOf(">", i) + 1;
      continue;
    }
    if (html.startsWith("</div>", i)) {
      depth -= 1;
      if (depth === 0) {
        return html.slice(start, i + 6);
      }
      i += 6;
      continue;
    }
    i += 1;
  }

  return "";
}

const voidElements = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

function htmlToJsx(html) {
  let src = preprocessHtml(html)
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<\/?template[^>]*>/g, "")
    .trim();

  src = src.replace(/<(\w+)([^>]*?)>/g, (full, tag, attrs) => {
    const lower = tag.toLowerCase();
    if (lower === "gopagelink") {
      const hrefMatch = attrs.match(/\shref="([^"]+)"/);
      const href = hrefMatch ? hrefMatch[1] : "/";
      const rest = convertAttributes(attrs.replace(/\shref="[^"]+"/, ""));
      return `<Link href="${href}"${rest}>`;
    }
    if (lower === "br" || lower === "hr" || lower === "img" || lower === "input") {
      const converted = convertAttributes(attrs);
      const trimmed = converted.trim();
      if (trimmed.endsWith("/")) {
        return `<${lower}${converted}>`;
      }
      return `<${lower}${converted} />`;
    }
    return `<${lower}${convertAttributes(attrs)}>`;
  });

  src = src.replace(/<\/(\w+)>/g, (_, tag) => {
    if (tag.toLowerCase() === "gopagelink") return "</Link>";
    return `</${tag.toLowerCase()}>`;
  });

  return src;
}

function splitSections(pageHtml, pageName) {
  const sections = [];
  const heroOnlyMatch = pageHtml.match(/<section class="hero">[\s\S]*?<\/section>/);
  const breadcrumb = extractBalancedDiv(pageHtml, "breadcrumb");
  const pageHero = extractBalancedDiv(pageHtml, "page-hero");

  if (heroOnlyMatch) {
    sections.push({ name: "HeroSection", html: heroOnlyMatch[0] });
  } else if (breadcrumb && pageHero) {
    sections.push({
      name: "PageHeroSection",
      html: `<div class="page-hero-block">\n${breadcrumb}\n${pageHero}\n</div>`,
    });
  } else if (breadcrumb) {
    sections.push({ name: "PageHeroSection", html: breadcrumb });
  }

  const statsBar = extractBalancedDiv(pageHtml, "stats-bar");
  if (statsBar) {
    sections.push({ name: "StatsBarSection", html: statsBar });
  }

  const impactBar = extractBalancedDiv(pageHtml, "impact-bar");
  if (impactBar) {
    sections.push({ name: "ImpactBarSection", html: impactBar });
  }

  const sectionRegex = /<section[\s\S]*?<\/section>/g;
  let match;
  let i = 0;
  while ((match = sectionRegex.exec(pageHtml)) !== null) {
    if (heroOnlyMatch && match[0] === heroOnlyMatch[0]) continue;
    i += 1;
    const cls = match[0].match(/class="([^"]*)"/)?.[1] || "section";
    const slug = cls
      .split(" ")
      .filter(Boolean)
      .map((c) => c.replace(/^sec-?/, "").replace(/-/g, " "))
      .slice(0, 2)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("")
      .replace(/\s/g, "");
    sections.push({
      name: `${slug || "Section"}${i}`,
      html: match[0],
    });
  }

  const ctaRegex = /<section class="cta-strip">[\s\S]*?<\/section>/g;
  while ((match = ctaRegex.exec(pageHtml)) !== null) {
    if (sections.some((s) => s.html === match[0])) continue;
    sections.push({ name: `CtaStrip${sections.length}`, html: match[0] });
  }

  if (sections.length === 0) {
    sections.push({ name: "PageContent", html: pageHtml });
  }

  return sections;
}

function pascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

function writeComponent(filePath, componentName, jsxBody, client = false) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });

  const needsLink = jsxBody.includes("<Link ");
  let imports = "";
  if (needsLink) imports += `import Link from 'next/link';\n`;

  const body = `return (\n    ${jsxBody}\n  );`;

  const content = `${imports}
export default function ${componentName}() {
  ${body}
}
`;

  fs.writeFileSync(filePath, content);
}

function buildGlobalsCss(css) {
  const tokens = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Global design tokens — mapped from original HTML/CSS */
  --color-primary: #0A4B9B;
  --color-secondary: #2e3191;
  --color-secondary-alt: #3a3eb8;
  --color-accent: #1b8a73;
  --color-accent-light: #03ad7e;
  --color-accent-dark: #0f5e50;
  --color-gold: #1b8a73;
  --color-teal: #008aa4;
  --color-gold-highlight: #f5b61f;
  --color-background: #ffffff;
  --color-background-off: #f7f8fd;
  --color-background-light: #eef0fa;
  --color-border: #d4d7ef;
  --color-text-muted: #5a5f8a;
  --color-text-dark: #12154a;
  --color-footer-accent: #0f9bd7;

  --font-heading: 'Montserrat', sans-serif;
  --font-title: 'Montserrat', sans-serif;
  --font-subtitle: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-extra: 'Montserrat', sans-serif;

  --heading: 40px;
  --title: 32px;
  --subtitle: 15px;
  --extraFont: 13px;

  /* Legacy aliases used throughout original CSS */
  --blue: var(--color-primary);
  --blue2: var(--color-secondary);
  --blue3: var(--color-secondary-alt);
  --green: var(--color-accent);
  --green2: var(--color-accent-light);
  --green3: var(--color-accent-dark);
  --gold: var(--color-gold);
  --teal: var(--color-teal);
  --white: var(--color-background);
  --off: var(--color-background-off);
  --light: var(--color-background-light);
  --border: var(--color-border);
  --muted: var(--color-text-muted);
  --dark: var(--color-text-dark);
  --fh: var(--font-heading);
  --fb: var(--font-body);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background: var(--color-background);
  color: var(--color-secondary);
  line-height: 1.6;
}

.heading {
  font-family: var(--font-heading);
  font-size: var(--heading);
  line-height: 1.2em;
  text-transform: capitalize;
  font-weight: 800;
}

.title {
  font-family: var(--font-title);
  font-size: var(--title);
  font-weight: 400;
  line-height: 1.2em;
}

.subtitle {
  font-family: var(--font-subtitle);
  font-size: var(--subtitle);
  font-weight: 400;
  line-height: 1.4em;
}

.extraFont {
  font-family: var(--font-extra);
  font-size: var(--extraFont);
  line-height: 1.2em;
}

`;

  return tokens + css.replace(/^\s*\*[\s\S]*?(?=\/\*|\.)/, "*{box-sizing:border-box;margin:0;padding:0}\n");
}

const mainHtml = readFile("NTT_Website_Complete_3.html");
const careersHtml = readFile("NTT_Careers_Page.html");
const supportHtml = readFile("NTT_Support_Page.html");
const conclavesHtml = readFile("NTT_Conclaves_Page.html");

const css = extractStyle(mainHtml);
fs.writeFileSync(path.join(root, "app", "globals.css"), buildGlobalsCss(css));

const pages = [
  { id: "home", file: mainHtml, route: "/" },
  { id: "about", file: mainHtml, route: "/about" },
  { id: "topschool", file: mainHtml, route: "/topschool-learning-management-system" },
  { id: "topclass", file: mainHtml, route: "/topclass-digital-classroom" },
  { id: "topassess", file: mainHtml, route: "/topassess" },
  { id: "topseries", file: mainHtml, route: "/topseries-grade-1-to-8" },
  { id: "ifp", file: mainHtml, route: "/interactive-flat-panels" },
  { id: "contact", file: mainHtml, route: "/contact" },
  { id: "conclaves", file: conclavesHtml, route: "/conclaves", pageId: "conclaves" },
  { id: "news", file: mainHtml, route: "/news" },
  { id: "blogs", file: mainHtml, route: "/blogs" },
  { id: "locations", file: mainHtml, route: "/locations" },
  { id: "careers", file: careersHtml, route: "/careers", pageId: "careers" },
  { id: "support", file: supportHtml, route: "/support-services", pageId: "support" },
];

pages.forEach(({ id, file, route, pageId }) => {
  const pid = pageId || id;
  const pageHtml = extractPage(file, pid);
  if (!pageHtml) {
    console.warn(`No content for page: ${id}`);
    return;
  }

  const sections = splitSections(pageHtml, id);
  const pageDir = path.join(root, "components", "pages", pascalCase(id));
  fs.mkdirSync(pageDir, { recursive: true });

  const sectionImports = [];
  const sectionNames = [];

  sections.forEach((section, idx) => {
    const name = section.name.endsWith(String(idx + 1)) ? section.name : `${section.name}${idx + 1}`;
    const uniqueName = sectionNames.includes(name) ? `${name}Extra` : name;
    sectionNames.push(uniqueName);

    const jsx = htmlToJsx(section.html);
    writeComponent(path.join(pageDir, `${uniqueName}.tsx`), uniqueName, jsx);
    sectionImports.push(`import ${uniqueName} from './${uniqueName}';`);
  });

  const pageComponent = `${sectionImports.join("\n")}
import Footer from '@/components/Footer';

export default function ${pascalCase(id)}Page() {
  return (
    <main>
${sectionNames.map((n) => `      <${n} />`).join("\n")}
      <Footer />
    </main>
  );
}
`;

  fs.writeFileSync(path.join(pageDir, "index.tsx"), pageComponent);

  const routeDir =
    route === "/"
      ? path.join(root, "app")
      : path.join(root, "app", route.slice(1));

  if (route !== "/") fs.mkdirSync(routeDir, { recursive: true });

  const pageFile = route === "/" ? "page.tsx" : "page.tsx";
  fs.writeFileSync(
    path.join(routeDir, pageFile),
    `import ${pascalCase(id)}Page from '@/components/pages/${pascalCase(id)}';\n\nexport { metadata } from '@/lib/seo/pages/${id}';\n\nexport default function Page() {\n  return <${pascalCase(id)}Page />;\n}\n`,
  );
});

console.log("Conversion complete.");
