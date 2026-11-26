"use client";

import { useEffect } from "react";

export default function AosInitializer() {
  useEffect(() => {
    let active = true;

    import("aos").then((module) => {
      if (active) {
        const AOS = module.default;
        AOS.init({ duration: 1000, once: true, mirror: false });
        AOS.refresh();
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return null;
}
