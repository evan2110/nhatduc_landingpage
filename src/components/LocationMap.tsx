import { MapPin, Navigation, Phone } from "lucide-react";
import { siteInfo } from "@/data/site-content";

export default function LocationMap() {
  return (
    <section id="vi-tri" className="bg-surface px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            {siteInfo.name}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-primary md:text-4xl">
            Vị trí trung tâm
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Ghé thăm trực tiếp hoặc mở Google Maps để chỉ đường đến Nhật Đức
            tại Lệ Thủy, Quảng Bình.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-5">
          <div className="flex flex-col justify-center rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-100 lg:col-span-2">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-primary">Địa chỉ</p>
                  <p className="mt-1 leading-relaxed text-gray-600">
                    {siteInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-primary">Hotline</p>
                  <a
                    href={`tel:${siteInfo.phoneRaw}`}
                    className="mt-1 block text-lg font-semibold text-accent hover:underline"
                  >
                    {siteInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={siteInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-bold text-white transition hover:bg-blue-900"
            >
              <Navigation className="h-5 w-5" />
              Mở Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-100 lg:col-span-3">
            <iframe
              title={`Bản đồ ${siteInfo.name}`}
              src={siteInfo.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[360px] w-full md:min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
