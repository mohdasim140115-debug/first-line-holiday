import Image from "next/image";
import Icon from "./Icon";
import TripPlanner from "./TripPlanner";
import OfferCountdown from "./OfferCountdown";
import { heroTrust, heroOffer } from "@/lib/content";
import heroImg from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-royal-deep">
      <Image
        src={heroImg}
        alt="Traditional houseboats on Dal Lake with snow-capped mountains behind, Srinagar, Kashmir"
        fill
        priority
        placeholder="blur"
        quality={60}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-royal-deep/80 via-royal-deep/45 to-royal-deep/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-royal-deep/45 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-5 pb-14 pt-24 md:min-h-[78vh] md:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
        {/* Left — headline */}
        <div className="max-w-xl">
          <OfferCountdown />

          <h1 className="mt-4 font-serif text-[2rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-[2.6rem] lg:text-[3.1rem]">
            Best <span className="text-brand-orange">Kashmir Tour Packages</span> for Holiday &amp;
            Trip in 2026
          </h1>

          <p className="mt-3 text-sm font-medium text-white/85 sm:text-base">
            {heroOffer.ratingNote}
          </p>

          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
            Book customized{" "}
            <span className="font-semibold text-brand-orange">Kashmir holiday packages</span> with a
            trusted{" "}
            <span className="font-semibold text-brand-orange">travel agency for Kashmir tours</span>.
            Local operators for Srinagar, Gulmarg &amp; Pahalgam vacation trips.
          </p>

          <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            {heroTrust.map((t, i) => (
              <li key={t} className="flex items-center gap-2 text-[0.8rem] font-medium text-white/80">
                {i > 0 ? <span className="hidden h-3 w-px bg-white/25 sm:mr-3 sm:block" /> : null}
                <Icon name="check" className="h-4 w-4 text-brand-orange" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — plan form */}
        <div className="w-full lg:max-w-md lg:justify-self-end">
          <TripPlanner />
        </div>
      </div>
    </section>
  );
}
