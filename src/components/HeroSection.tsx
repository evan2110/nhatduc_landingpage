import Image from "next/image";
import { ChevronRight, Globe } from "lucide-react";
import { heroContent, siteInfo } from "@/data/site-content";

function Cloud({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      aria-hidden
      fill="white"
      opacity={0.85}
    >
      <ellipse cx="35" cy="35" rx="28" ry="18" />
      <ellipse cx="60" cy="28" rx="32" ry="22" />
      <ellipse cx="88" cy="36" rx="26" ry="17" />
    </svg>
  );
}

function CitySkyline() {
  return (
    <svg
      viewBox="0 0 1440 80"
      className="absolute bottom-0 left-0 w-full text-blue-300/50"
      preserveAspectRatio="none"
      aria-hidden
      fill="currentColor"
    >
      <path d="M0 80V55h60v25H0zm80-20h50v45H80V60zm70 10h40v35h-40V70zm65-25h55v60h-55V45zm75 15h45v45h-45V60zm70-30h60v75h-60V30zm80 20h50v55h-50V50zm75-15h55v70h-55V35zm70 25h48v45h-48V60zm72-20h52v65h-52V40zm78 10h46v55h-46V50zm74-25h58v80h-58V25zm76 20h50v60h-50V45zm72-10h54v70h-54V35zm80 15h48v55h-48V50zm76-30h56v85h-56V20zm74 25h52v60h-52V45zm78-15h50v75h-50V30zm72 20h54v55h-54V50zm80-25h58v80h-58V25zm76 10h48v70h-48V35zm74 15h52v55h-52V50zm78-20h50v75h-50V30zm72 25h56v50h-56V55zm80-10h48v60h-48V45zm76 15h54v45h-54V60zm74-30h52v75h-52V30zm78 20h50v55h-50V50zm72-15h58v70h-58V35zm80 10h46v60h-46V45zm76-25h54v85h-54V20zm74 30h50v50h-50V50zm78-10h52v60h-52V40zm72 15h48v45h-48V55zm80-20h56v75h-56V35zm76 25h50v50h-50V75zm74-15h54v60h-54V45zm78 10h52v55h-52V65zm72-30h48v80h-48V35zm80 20h58v55h-58V55zm76-10h50v65h-50V45zm74 15h54v50h-54V60zm78-25h52v75h-52V35zm72 20h48v60h-48V55zm80-15h56v70h-56V40zm76 10h50v55h-50V50zm74-20h54v75h-54V30zm78 25h52v50h-52V75zm72-10h48v60h-48V65zm80 15h58v45h-58V80zm76-30h50v75h-50V5zm74 20h54v55h-54V25zm78-15h52v70h-52V10zm72 10h48v60h-48V20zm80-25h56v80h-56V0zm76 30h50v50h-50V30zm74-10h54v60h-54V20zm78 15h52v45h-52V35zm72-20h48v75h-48V15zm80 25h58v50h-58V40zm76-15h50v70h-50V25zm74 10h54v55h-54V35zm78-30h52v80h-52V0zm72 20h48v60h-48V20zm80-10h56v70h-56V10zm76 15h50v55h-50V25zm74-25h54v80h-54V0zm78 30h52v50h-52V30zm72-15h48v65h-48V15zm80 10h58v55h-58V25zm76-20h50v75h-50V5zm74 25h54v50h-54V30zm78-10h52v60h-52V20zm72 15h48v45h-48V35zm80-30h56v80h-56V0zm76 20h50v60h-50V20zm74-15h54v70h-54V10zm78 10h52v55h-52V25zm72-25h48v80h-48V0zm80 30h58v50h-58V30zm76-10h50v60h-50V20zm74 15h54v45h-54V35zm78-20h52v75h-52V5zm72 25h48v50h-48V30zm80-15h56v70h-56V15zm76 10h50v55h-50V25zm74-30h54v80h-54V0zm78 20h52v60h-52V20zm72-10h48v70h-48V10zm80 15h58v55h-58V25zm76-25h50v80h-50V0zm74 30h54v50h-54V30zm78-15h52v65h-52V15zm72 10h48v55h-48V25zm80-20h56v75h-56V5zm76 25h50v50h-50V30zm74-10h54v60h-54V20zm78 15h52v45h-52V35zm72-30h48v80h-48V0zm80 20h58v55h-58V20zm76-15h50v70h-50V10zm74 10h54v55h-54V25zm78-25h52v75h-52V5zm72 20h48v60h-48V20zm80-10h56v70h-56V10zm76 15h50v55h-50V25zm74-20h54v80h-54V0zm78 30h52v50h-52V30zm72-15h48v65h-48V15zm80 10h58v55h-58V25zm76-25h50v80h-50V0zm74 20h54v60h-54V20zm78-10h52v70h-52V10zm72 15h48v55h-48V25zm80-30h56v80h-56V0zm76 20h50v60h-50V20zm74-15h54v70h-54V10zm78 10h52v55h-52V25zm72-25h48v80h-48V0zm80 30h58v50h-58V30zm76-10h50v60h-50V20zm74 15h54v45h-54V35zm78-20h52v75h-52V5zm72 25h48v50h-48V30zm80-15h56v70h-56V15zm76 10h50v55h-50V25zm74-30h54v80h-54V0zm78 20h52v60h-52V20zm72-10h48v70h-48V10zm80 15h58v55h-58V25zm76-25h50v80h-50V0zm74 30h54v50h-54V30zm78-15h52v65h-52V15zm72 10h48v55h-48V25zm80-20h56v75h-56V5zm76 25h50v50h-50V30zm74-10h54v60h-54V20zm78 15h52v45h-52V35zm72-30h48v80h-48V0z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-sky relative overflow-hidden px-4 pb-0 pt-6 md:pt-8">
      <Cloud className="pointer-events-none absolute left-[5%] top-16 h-14 w-28 md:h-20 md:w-36" />
      <Cloud className="pointer-events-none absolute right-[8%] top-24 h-12 w-24 opacity-70 md:h-16 md:w-32" />
      <Cloud className="pointer-events-none absolute left-[35%] top-8 h-10 w-20 opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4 md:mb-10">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md">
              <Globe className="h-7 w-7 text-accent" />
            </div>
            <div>
              <p className="text-xl font-extrabold tracking-tight text-primary md:text-2xl">
                NHẬT ĐỨC
              </p>
              <p className="max-w-xs text-xs leading-snug text-primary/80 md:text-sm">
                {heroContent.tagline}
              </p>
            </div>
          </div>
          <a
            href="#dang-ky"
            className="hidden rounded-full bg-accent px-6 py-2.5 text-sm font-bold uppercase text-white shadow-lg transition hover:bg-accent-hover sm:inline-block"
          >
            Đăng ký học thử
          </a>
        </div>

        {/* Main hero */}
        <div className="grid items-center gap-8 pb-16 md:grid-cols-2 md:gap-6 md:pb-20 lg:pb-24">
          <div className="relative z-10 text-center md:text-left">
            <span className="hero-deco animate-float-slow absolute -left-2 top-0 hidden text-3xl md:inline-block">
              ✈️
            </span>
            <span className="hero-deco animate-float absolute left-16 top-20 hidden text-2xl md:inline-block">
              ⭐
            </span>

            <h1 className="hero-headline text-4xl font-extrabold leading-none tracking-tight sm:text-5xl lg:text-6xl">
              {heroContent.headline}
            </h1>

            <div className="mt-5 inline-block">
              <div className="hero-ribbon px-6 py-2.5 text-sm font-bold text-white shadow-md sm:text-base md:px-8 md:py-3">
                {heroContent.ribbon}
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
              <a
                href="#dang-ky"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold uppercase text-white shadow-xl transition hover:bg-accent-hover hover:shadow-2xl sm:text-lg"
              >
                <ChevronRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                <ChevronRight className="-ml-4 h-5 w-5 transition group-hover:translate-x-0.5" />
                Đăng ký học thử
              </a>
            </div>

            <p className="mt-6 text-sm font-medium text-primary/70">
              {siteInfo.followers} phụ huynh theo dõi trên Facebook
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <span className="hero-deco animate-float absolute -left-4 top-8 text-4xl md:-left-8">
              🚌
            </span>
            <span className="hero-deco animate-float-slow absolute -right-2 bottom-16 text-3xl md:right-0">
              ⭐
            </span>
            <span className="hero-deco animate-float absolute right-8 top-0 text-2xl">
              ✏️
            </span>

            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
              <Image
                src={heroContent.image}
                alt={heroContent.imageAlt}
                width={640}
                height={480}
                priority
                className="aspect-[4/3] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/50 to-transparent p-4">
                <p className="text-center text-sm font-semibold text-white drop-shadow">
                  Học thật vui — Tiến bộ thật chắc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CitySkyline />
    </section>
  );
}
