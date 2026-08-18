"use client";

import { useEffect, useRef } from "react";

export function useInteractiveHandlers() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

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
        const panel = section.querySelector(`#cur-${curTab.dataset.curTab}`);
        panel?.classList.add("active");
        return;
      }

      const sTab = target.closest("[data-s-tab]") as HTMLElement | null;
      if (sTab?.dataset.sTab) {
        const section = sTab.closest("section");
        if (!section) return;
        section.querySelectorAll(".s-tab").forEach((t) => t.classList.remove("active"));
        section.querySelectorAll(".s-panel").forEach((p) => p.classList.remove("active"));
        sTab.classList.add("active");
        const panel = section.querySelector(`#s-${sTab.dataset.sTab}`);
        panel?.classList.add("active");
      }
    };

    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, []);

  return ref;
}
