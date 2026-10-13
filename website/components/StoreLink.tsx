"use client";

import type { ReactNode } from "react";
import { trackStoreClick } from "@/lib/tracking";

type StoreLinkProps = {
  href: string;
  store: "app_store" | "google_play";
  className?: string;
  children: ReactNode;
};

/** The only client piece of a store button: fires the Pixel `ViewContent` on click. */
export default function StoreLink({ href, store, className = "", children }: StoreLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackStoreClick(store)}
      className={className}
    >
      {children}
    </a>
  );
}
