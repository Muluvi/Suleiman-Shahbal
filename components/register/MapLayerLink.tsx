"use client";

/**
 * Pre-selects the ward map's layer from the address: "#ward-map-footprint" opens the one layered
 * ward map (fig-3-2-register-map, How Mombasa voted) on its "where the 2022 race was closest" layer. Without
 * JavaScript the link still lands on the map, on its default layer, with every layer one tap away.
 */
import { useEffect } from "react";
export const WARD_MAP_ROUTE = "votes";

export function LayerFromHash({ id }: { id: string }) {
  useEffect(() => {
    const apply = () => {
      const m = /^#ward-map-([a-z-]+)$/.exec(window.location.hash);
      if (!m) return;
      const input = document.querySelector<HTMLInputElement>(`input[name="${id}-layer"][value="${m[1]}"]`);
      if (!input) return;
      input.checked = true;
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [id]);
  return null;
}
