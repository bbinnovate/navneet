import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const componentsDir = path.join(root, "components");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".tsx")) files.push(full);
  }
  return files;
}

function fixContent(content) {
  let src = content;

  // Double self-closing tags from converter
  src = src.replace(/\s\/ \/>/g, " />");

  // Anchor closed with Link (single-line only — avoid cross-element matches)
  src = src.replace(/(<a\b[^>\n]*>[^<]*)<\/Link>/g, "$1</a>");

  // Link closed with anchor
  src = src.replace(/(<Link\b[^>]*>[^<]*)<\/a>/g, "$1</Link>");

  // Remaining GoPageLink / link-go-page tags
  src = src.replace(/<link-go-page\b([^>]*)>([\s\S]*?)<\/link-go-page>/gi, (_, attrs, inner) => {
    const href = attrs.match(/\shref="([^"]+)"/i)?.[1] ?? "/";
    const rest = attrs.replace(/\shref="[^"]+"/i, "");
    return `<Link href="${href}"${rest}>${inner}</Link>`;
  });
  src = src.replace(/<GoPageLink\b([^>]*)>([\s\S]*?)<\/GoPageLink>/g, (_, attrs, inner) => {
    const href = attrs.match(/\shref="([^"]+)"/i)?.[1] ?? "/";
    const rest = attrs.replace(/\shref="[^"]+"/i, "");
    return `<Link href="${href}"${rest}>${inner}</Link>`;
  });

  // Malformed CTA: Link opened, button closed, ghost button closed with Link
  src = src.replace(
    /<Link href="([^"]+)" className="btn-wh"\s*>\s*([\s\S]*?)<\/button\s*>\s*<button className="btn-ghost">([\s\S]*?)<\/Link>/g,
    '<Link href="$1" className="btn-wh">$2</Link>\n          <button className="btn-ghost">$3</button>',
  );

  // button with href -> anchor (external links)
  src = src.replace(
    /<button className="btn-outline-blue"([^>]*)\shref="([^"]+)"([^>]*)>([\s\S]*?)<\/button>/g,
    '<a className="btn-outline-blue"$1 href="$2"$3 target="_blank" rel="noopener noreferrer">$4</a>',
  );
  src = src.replace(
    /<button className="btn-outline-blue"([^>]*)\shref="([^"]+)"([^>]*)>([\s\S]*?)<\/Link>/g,
    '<a className="btn-outline-blue"$1 href="$2"$3 target="_blank" rel="noopener noreferrer">$4</a>',
  );

  // button with external href (conclaves youtube)
  src = src.replace(
    /<button className="btn-outline-blue"\s+href="([^"]+)"([^>]*)>([\s\S]*?)<\/button>/g,
    '<a className="btn-outline-blue" href="$1"$2 target="_blank" rel="noopener noreferrer">$3</a>',
  );

  // button with href for btn-wh (Blue5)
  src = src.replace(
    /<button\s+className="btn-wh"\s+href="([^"]+)"([^>]*)>([\s\S]*?)<\/button>/g,
    '<a className="btn-wh" href="$1"$2 target="_blank" rel="noopener noreferrer">$3</a>',
  );

  // Ensure Link import when Link is used
  if (src.includes("<Link ") && !src.includes("import Link from 'next/link'") && !src.includes('import Link from "next/link"')) {
    src = `import Link from 'next/link';\n\n${src}`;
  }

  return src;
}

const files = walk(componentsDir);
let fixed = 0;
for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  const updated = fixContent(original);
  if (updated !== original) {
    fs.writeFileSync(file, updated);
    fixed += 1;
  }
}

console.log(`Fixed ${fixed} component files.`);
