"use client";

import { Phone } from "lucide-react";
import { siteInfo } from "@/data/site-content";

function MessengerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.03 2 10.88c0 2.55 1.27 4.83 3.26 6.35-.14.5-.9 3.22-.93 3.44 0 0-.02.17.1.24.12.07.27.02.27.02.35-.05 4.06-2.68 4.7-3.12.64.09 1.3.14 1.97.14 5.52 0 10-4.03 10-8.88S17.52 2 12 2z" />
    </svg>
  );
}

function ZaloIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.02 2 10.82c0 2.13 1.05 4.03 2.7 5.35-.1.36-.65 2.28-.67 2.47 0 0-.01.12.08.17.09.05.2.01.2.01.26-.04 3.05-1.9 3.54-2.22.48.07.98.1 1.48.1 5.52 0 10-4.02 10-8.82S17.52 2 12 2zm-1.2 11.5h-2.4V8.5h2.4v5zm4.8 0h-2.4V8.5h2.4v5z" />
    </svg>
  );
}

const channels = [
  {
    id: "messenger",
    href: siteInfo.messengerUrl,
    label: "Chat qua Messenger",
    bg: "bg-[#0084FF]",
    icon: <MessengerIcon />,
    external: true,
  },
  {
    id: "zalo",
    href: siteInfo.zalo.url,
    label: siteInfo.zalo.label,
    bg: "bg-[#0068FF]",
    icon: <ZaloIcon />,
    external: true,
  },
  {
    id: "phone",
    href: `tel:${siteInfo.phoneRaw}`,
    label: `Gọi ${siteInfo.phone}`,
    bg: "bg-primary",
    icon: <Phone className="h-6 w-6" strokeWidth={2} />,
    external: false,
  },
] as const;

export default function ContactWidget() {
  return (
    <div
      className="fixed bottom-20 right-4 z-40 flex flex-col gap-3 sm:bottom-6"
      aria-label="Liên hệ nhanh"
    >
      {channels.map((channel) => (
        <a
          key={channel.id}
          href={channel.href}
          target={channel.external ? "_blank" : undefined}
          rel={channel.external ? "noopener noreferrer" : undefined}
          title={channel.label}
          aria-label={channel.label}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-white shadow-lg ring-1 ring-black/5 transition hover:scale-105 hover:shadow-xl"
        >
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-full ${channel.bg}`}
          >
            {channel.icon}
          </span>
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-md transition group-hover:opacity-100 sm:block">
            {channel.label}
          </span>
        </a>
      ))}
    </div>
  );
}
