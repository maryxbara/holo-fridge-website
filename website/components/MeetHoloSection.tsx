import Image from "next/image";
import Reveal from "./Reveal";
import SectionWrapper from "./SectionWrapper";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type MeetHoloSectionProps = {
  locale: Locale;
};

/**
 * The one place the mascot appears: mid-page, at most 320 px tall, on a
 * dark-ivory band. No fog, no glow floor.
 */
export default function MeetHoloSection({ locale }: MeetHoloSectionProps) {
  return (
    <SectionWrapper id="meet-holo" className="bg-ivoryDeep dark:bg-inkDeep">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8">
        <Reveal className="order-2 flex flex-col items-center md:order-1 md:col-span-5">
          <Image
            src="/holo-hologram.png"
            alt="Holo, the fridge character, waving"
            width={1179}
            height={941}
            sizes="(max-width: 768px) 70vw, 400px"
            className="h-auto w-full max-w-[400px] select-none"
            style={{ maxHeight: 320, objectFit: "contain" }}
            draggable={false}
          />
          <p className="mt-5 text-sm text-bodyGray dark:text-[#f3f1ec]/60">
            {t(locale, "meetHoloCaption")}
          </p>
        </Reveal>

        <Reveal className="order-1 text-center md:order-2 md:col-span-7 md:text-left" delay={0.06}>
          <h2 className="text-balance text-[32px] font-semibold leading-[1.1] tracking-tightish text-charcoal dark:text-[#f3f1ec] sm:text-[40px]">
            {t(locale, "meetHoloTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-bodyGray dark:text-[#f3f1ec]/70 sm:text-xl md:mx-0">
            {t(locale, "meetHoloDesc")}
          </p>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
