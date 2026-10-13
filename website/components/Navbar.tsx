import NavbarClient from "./NavbarClient";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type NavbarProps = {
  locale: Locale;
};

/** Server wrapper: resolves strings here so translations stay out of the client bundle. */
export default function Navbar({ locale }: NavbarProps) {
  return (
    <NavbarClient
      locale={locale}
      labels={{
        howItWorks: t(locale, "navHowItWorks"),
        meetHolo: t(locale, "navMeetHolo"),
        support: t(locale, "navSupport"),
        getHolo: t(locale, "navGetHolo"),
        lightMode: t(locale, "lightMode"),
        darkMode: t(locale, "darkMode"),
        language: t(locale, "language"),
      }}
    />
  );
}
