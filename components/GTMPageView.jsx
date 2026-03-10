"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GTMPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: window.location.pathname + window.location.search,
    });
  }, [pathname]);

  return null;
}
