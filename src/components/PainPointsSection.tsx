import Image from "next/image";
import SectionCloudDivider from "@/components/SectionCloudDivider";
import { painPoints, painPointsContent } from "@/data/site-content";

function PainPointCard({
  num,
  text,
  side,
}: {
  num: number;
  text: string;
  side: "left" | "right";
}) {
  return (
    <div
      className={`pain-point-card relative rounded-2xl border-2 border-dashed border-blue-300/90 bg-white/95 px-5 py-4 shadow-sm backdrop-blur-sm ${
        side === "left" ? "pr-12 md:pr-14" : "pl-12 md:pl-14"
      }`}
    >
      <div
        className={`absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white shadow-md ${
          side === "left" ? "-right-4 md:-right-5" : "-left-4 md:-left-5"
        }`}
      >
        {num}
      </div>
      <p className="text-sm leading-relaxed text-primary/90 md:text-[15px]">
        {text}
      </p>
    </div>
  );
}

function QuestionBubble({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-full bg-amber-300 text-xl font-extrabold text-white shadow-lg ${className}`}
      aria-hidden
    >
      ?
    </div>
  );
}

export default function PainPointsSection() {
  const leftItems = painPoints.slice(0, 3);
  const rightItems = painPoints.slice(3, 6);

  return (
    <section className="relative bg-pain-sky">
      {/* Nối từ hero — mây + skyline mờ */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#b8e4f8] to-transparent" />
        <svg
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          className="relative -mt-px w-full text-blue-300/35"
          aria-hidden
          fill="currentColor"
        >
          <path d="M0 56V30h48v26H0zm72-14h36v40H72V42zm58 8h28v32H130V50zm52-18h40v50h-40V32zm64 12h32v38h-32V44zm56-22h44v60h-44V22zm68 16h30v44h-30V38zm54-10h38v52h-38V28zm62 18h34v34h-34V46zm58-16h42v50h-42V30zm66 10h28v40h-28V40zm54-20h36v56h-36V20zm64 14h40v42h-40V34zm58-12h32v54h-32V22zm66 20h38v36h-38V42zm52-18h44v56h-44V24zm68 12h30v44h-30V36zm56-14h36v50h-36V22zm64 18h40v38h-40V40zm58-16h32v52h-32V24zm66 10h42v46h-42V34zm54-20h28v56h-28V14zm64 16h38v40h-38V30zm58-12h34v54h-34V18zm66 20h30v36h-30V38zm52-18h44v56h-44V20zm68 14h36v42h-36V34zm56-10h32v52h-32V24zm64 18h40v38h-40V42zm58-16h28v54h-28V26zm66 12h42v44h-42V38zm54-20h36v56h-36V18zm64 16h30v40h-30V34zm58-14h38v50h-38V20zm66 18h32v38h-32V38zm52-16h44v54h-44V22zm68 10h28v46h-28V32zm56-18h40v56h-40V14zm64 16h34v40h-34V30zm58-12h36v52h-36V18zm66 20h30v36h-30V38zm54-18h42v56h-42V20zm68 14h32v42h-32V34zm56-10h38v52h-38V24zm64 18h28v38h-28V42zm58-16h44v54h-44V26zm66 12h36v44h-36V38zm54-20h30v56h-30V18zm64 16h40v40h-40V34zm58-14h32v50h-32V20zm66 18h38v38h-38V38zm52-16h28v54h-28V22zm68 10h42v46h-42V32zm56-18h34v56h-34V14zm64 16h36v40h-36V30zm58-12h30v52h-30V18zm66 20h40v36h-40V38zm54-18h32v56h-32V20zm68 14h44v42h-44V34zm56-10h28v52h-28V24zm64 18h38v38h-38V42zm58-16h36v54h-36V26zm66 12h30v44h-30V38zm54-20h42v56h-42V18zm64 16h32v40h-32V34zm58-14h40v50h-40V20zm66 18h28v38h-28V38zm52-16h44v54h-44V22zm68 10h34v46h-34V32zm56-18h36v56h-36V14zm64 16h30v40h-30V30zm58-12h38v52h-38V18zm66 20h32v36h-32V38zm54-18h42v56h-42V20zm68 14h28v42h-28V34zm56-10h40v52h-40V24zm64 18h36v38h-36V42zm58-16h30v54h-30V26zm66 12h44v44h-44V38zm54-20h32v56h-32V18zm64 16h38v40h-38V34zm58-14h28v50h-28V20zm66 18h42v38h-42V38zm52-16h34v54h-34V22zm68 10h36v46h-36V32zm56-18h30v56h-30V14zm64 16h40v40h-40V30zm58-12h32v52h-32V18zm66 20h38v36h-38V38zm54-18h28v56h-28V20zm68 14h44v42h-44V34zm56-10h36v52h-36V24zm64 18h30v38h-30V42zm58-16h42v54h-42V26zm66 12h32v44h-32V38zm54-20h40v56h-40V18zm64 16h28v40h-28V34zm58-14h38v50h-38V20zm66 18h34v38h-34V38zm52-16h30v54h-30V22zm68 10h42v46h-42V32zm56-18h36v56h-36V14zm64 16h32v40h-32V30zm58-12h44v52h-44V18zm66 20h28v36h-28V38zm54-18h40v56h-40V20zm68 14h38v42h-38V34zm56-10h30v52h-30V24zm64 18h42v38h-42V42zm58-16h32v54h-32V26zm66 12h36v44h-36V38zm54-20h28v56h-28V18zm64 16h44v40h-44V34zm58-14h34v50h-34V20zm66 18h30v38h-30V38zm52-16h40v54h-40V22zm68 10h32v46h-32V32zm56-18h38v56h-38V14zm64 16h28v40h-28V30zm58-12h42v52h-42V18zm66 20h36v36h-36V38zm54-18h30v56h-30V20zm68 14h44v42h-44V34zm56-10h32v52h-32V24zm64 18h38v38h-38V42zm58-16h28v54h-28V26zm66 12h40v44h-40V38zm54-20h36v56h-36V18zm64 16h30v40h-30V34zm58-14h42v50h-42V20zm66 18h32v38h-32V38zm52-16h34v54h-34V22zm68 10h44v46h-44V32zm56-18h28v56h-28V14zm64 16h38v40h-38V30zm58-12h30v52h-30V18zm66 20h42v36h-42V38zm54-18h32v56h-32V20zm68 14h36v42h-36V34zm56-10h40v52h-40V24zm64 18h28v38h-28V42zm58-16h44v54h-44V26zm66 12h30v44h-30V38zm54-20h38v56h-38V18zm64 16h32v40h-32V34zm58-14h42v50h-42V20zm66 18h28v38h-28V38zm52-16h40v54h-40V22zm68 10h36v46h-36V32zm56-18h34v56h-34V14zm64 16h30v40h-30V30zm58-12h44v52h-44V18zm66 20h32v36h-32V38zm54-18h38v56h-38V20zm68 14h28v42h-28V34zm56-10h42v52h-42V24zm64 18h36v38h-36V42zm58-16h30v54h-30V26zm66 12h40v44h-40V38zm54-20h32v56h-32V18zm64 16h44v40h-44V34zm58-14h28v50h-28V20zm66 18h38v38h-38V38zm52-16h34v54h-34V22zm68 10h42v46h-42V32zm56-18h30v56h-30V14zm64 16h36v40h-36V30zm58-12h32v52h-32V18zm66 20h40v36h-40V38zm54-18h28v56h-28V20zm68 14h44v42h-44V34zm56-10h32v52h-32V24zm64 18h38v38h-38V42zm58-16h30v54h-30V26zm66 12h42v44h-42V38zm54-20h36v56h-36V18zm64 16h28v40h-28V34zm58-14h40v50h-40V20zm66 18h32v38h-32V38zm52-16h34v54h-34V22zm68 10h44v46h-44V32zm56-18h28v56h-28V14zm64 16h38v40h-38V30zm58-12h30v52h-30V18zm66 20h42v36h-42V38zm54-18h32v56h-32V20zm68 14h36v42h-36V34zm56-10h40v52h-40V24zm64 18h28v38h-28V42zm58-16h44v54h-44V26zm66 12h30v44h-30V38zm54-20h38v56h-38V18zm64 16h32v40h-32V34zm58-14h42v50h-42V20zm66 18h28v38h-28V38zm52-16h40v54h-40V22zm68 10h36v46h-36V32zm56-18h34v56h-34V14zm64 16h30v40h-30V30zm58-12h44v52h-44V18zm66 20h32v36h-32V38zm54-18h38v56h-38V20zm68 14h28v42h-28V34zm56-10h42v52h-42V24zm64 18h36v38h-36V42zm58-16h30v54h-30V26zm66 12h40v44h-40V38zm54-20h32v56h-32V18z" />
        </svg>
        <SectionCloudDivider className="relative -mt-1" />
      </div>

      <span
        className="pain-deco animate-float-slow pointer-events-none absolute left-[4%] top-28 hidden text-3xl md:block"
        aria-hidden
      >
        ✈️
      </span>
      <span
        className="pain-deco animate-float pointer-events-none absolute right-[5%] top-36 hidden text-2xl md:block"
        aria-hidden
      >
        📄
      </span>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-4 pt-10 md:pt-14">
        <h2 className="text-center text-2xl font-extrabold text-primary md:text-4xl">
          {painPointsContent.title}
        </h2>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-4 xl:gap-8">
          {/* Left column */}
          <div className="order-2 flex flex-col gap-5 lg:order-1">
            {leftItems.map((item) => (
              <PainPointCard
                key={item.num}
                num={item.num}
                text={item.text}
                side="left"
              />
            ))}
          </div>

          {/* Center image */}
          <div className="order-1 mx-auto w-full max-w-xs lg:order-2 lg:max-w-sm">
            <div className="relative">
              <QuestionBubble className="animate-float absolute -left-2 top-8 z-10 md:-left-4" />
              <QuestionBubble className="animate-float-slow absolute -right-1 top-16 z-10 md:-right-3" />

              <div className="relative mx-auto aspect-[9/10] w-full max-w-[280px]">
                <Image
                  src={painPointsContent.image}
                  alt={painPointsContent.imageAlt}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 280px, 320px"
                />
              </div>

              <div className="mx-auto mt-2 max-w-[300px] rounded-xl border-2 border-blue-300 bg-white/90 px-4 py-3 text-center shadow-sm">
                <p className="text-xs font-bold uppercase leading-snug tracking-wide text-primary md:text-sm">
                  {painPointsContent.centerLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="order-3 flex flex-col gap-5">
            {rightItems.map((item) => (
              <PainPointCard
                key={item.num}
                num={item.num}
                text={item.text}
                side="right"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Nối sang section tiếp theo */}
      <SectionCloudDivider flip fillClass="text-white" className="-mb-px" />
    </section>
  );
}
