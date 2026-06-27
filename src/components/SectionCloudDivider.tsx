type SectionCloudDividerProps = {
  /** Màu fill của phần bên dưới divider */
  fillClass?: string;
  /** Lật divider để dùng ở đáy section */
  flip?: boolean;
  className?: string;
};

/** Đường viền mây nối giữa các section — theo phong cách Betia */
export default function SectionCloudDivider({
  fillClass = "text-pain-sky",
  flip = false,
  className = "",
}: SectionCloudDividerProps) {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      aria-hidden
      className={`block w-full ${flip ? "rotate-180" : ""} ${fillClass} ${className}`}
    >
      <path
        fill="currentColor"
        d="M0,55 C120,20 240,75 360,45 C480,15 600,70 720,40 C840,10 960,65 1080,42 C1200,18 1320,72 1440,48 L1440,100 L0,100 Z"
      />
    </svg>
  );
}
