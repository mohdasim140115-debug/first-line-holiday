import Image from "next/image";
import Icon from "./Icon";
import TripPlanner from "./TripPlanner";
import { images, heroTrust } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <Image
        src={images.hero}
        alt="Traditional houseboats on Dal Lake with snow-capped mountains behind, Srinagar, Kashmir"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-royal-deep/80 via-royal-deep/45 to-royal-deep/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-royal-deep/45 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-28 md:min-h-[92vh] md:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
        {/* Left — headline */}
        <div className="max-w-xl">
          <p className="hero-fade eyebrow flex items-center gap-3 text-brand-orange" style={{ animationDelay: "0.05s" }}>
            <span className="h-px w-10 bg-brand-orange" />
            Your Journey Starts Here
          </p>

          <h1 className="hero-fade mt-4 font-serif font-semibold leading-[1.02] tracking-tight text-white" style={{ animationDelay: "0.15s" }}>
            <span className="block text-2xl sm:text-3xl">Experience</span>
            <span className="block text-[3.4rem] uppercase tracking-tight text-brand-orange sm:text-7xl lg:text-[5rem]">
              Kashmir
            </span>
            <span className="block text-2xl sm:text-3xl">Like Never Before</span>
          </h1>

          <p className="hero-fade mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg" style={{ animationDelay: "0.28s" }}>
            Beautiful journeys across Kashmir, thoughtfully planned around you.
          </p>

          <ul className="hero-fade mt-7 flex flex-wrap items-center gap-x-5 gap-y-2" style={{ animationDelay: "0.4s" }}>
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
        <div className="hero-fade w-full lg:max-w-md lg:justify-self-end" style={{ animationDelay: "0.5s" }}>
          <TripPlanner />
        </div>
      </div>
    </section>
  );
}
