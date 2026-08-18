"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GlobalInteractiveHandlers() {
  const router = useRouter();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const navEl = target.closest("[data-nav-href]") as HTMLElement | null;
      if (navEl?.dataset.navHref && navEl.tagName !== "A") {
        event.preventDefault();
        router.push(navEl.dataset.navHref);
        return;
      }

      const faqItem = target.closest("[data-faq-toggle]") as HTMLElement | null;
      if (faqItem?.dataset.faqToggle === "true") {
        faqItem.classList.toggle("open");
        return;
      }

      const curTab = target.closest("[data-cur-tab]") as HTMLElement | null;
      if (curTab?.dataset.curTab) {
        const section = curTab.closest("section");
        if (!section) return;
        section.querySelectorAll(".cur-tab").forEach((t) => t.classList.remove("active"));
        section.querySelectorAll(".cur-panel").forEach((p) => p.classList.remove("active"));
        curTab.classList.add("active");
        section.querySelector(`#cur-${curTab.dataset.curTab}`)?.classList.add("active");
        return;
      }

      const sTab = target.closest("[data-s-tab]") as HTMLElement | null;
      if (sTab?.dataset.sTab) {
        const section = sTab.closest("section");
        if (!section) return;
        section.querySelectorAll(".s-tab").forEach((t) => t.classList.remove("active"));
        section.querySelectorAll(".s-panel").forEach((p) => p.classList.remove("active"));
        sTab.classList.add("active");
        section.querySelector(`#s-${sTab.dataset.sTab}`)?.classList.add("active");
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return null;
}
