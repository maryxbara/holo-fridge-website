"use client";

import { openConsentSettings } from "@/lib/tracking";

export default function CookieSettingsButton({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      {label}
    </button>
  );
}
