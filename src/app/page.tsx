import { Globe } from "lucide-react";
import ActivityGallery from "@/components/ActivityGallery";
import ContactWidget from "@/components/ContactWidget";
import FacebookPageEmbed from "@/components/FacebookPageEmbed";
import HeroSection from "@/components/HeroSection";
import LeadershipProfile from "@/components/LeadershipProfile";
import LocationMap from "@/components/LocationMap";
import PainPointsSection from "@/components/PainPointsSection";
import RegisterForm from "@/components/RegisterForm";
import {
  activityImages,
  benefitsLeft,
  benefitsRight,
  leadership,
  packageItems,
  showcaseItems,
  siteInfo,
  testimonials,
} from "@/data/site-content";

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />

      <PainPointsSection />

      {/* Solutions */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              {siteInfo.name}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-primary md:text-4xl">
              Giải pháp giúp con giỏi,
              <br />
              ba mẹ an tâm
            </h2>
            <p className="mt-3 text-gray-600">
              Tại sao nên chọn {siteInfo.name}?
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <ul className="space-y-4">
              {benefitsLeft.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {benefitsRight.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="bg-surface px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {showcaseItems.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`bg-gradient-to-br ${item.color} flex h-40 items-center justify-center text-6xl`}
                >
                  {item.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Gallery */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              {siteInfo.name}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-primary md:text-4xl">
              Hình ảnh hoạt động
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              Các buổi học, hoạt động ngoại khóa và trải nghiệm giao tiếp — đặc
              biệt các hoạt động học tập, giảng dạy cùng giáo viên nước ngoài
              giúp học viên tự tin luyện nói tiếng Anh.
            </p>
          </div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
            <ActivityGallery images={activityImages} />
            <FacebookPageEmbed />
          </div>
        </div>
      </section>

      {/* Form Section 1 */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <RegisterForm id="dang-ky" />
        </div>
      </section>

      {/* Leadership */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-16">
          {leadership.map((person) => (
            <LeadershipProfile
              key={person.name}
              name={person.name}
              title={person.title}
              image={person.image}
              quote={person.quote}
              imageOnLeft={person.imageOnLeft}
              imagePosition={person.imagePosition}
            />
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              {siteInfo.name}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-primary md:text-4xl">
              Chương trình bồi dưỡng kỹ năng
            </h2>
            <p className="mt-3 text-gray-600">
              Dành cho trẻ {siteInfo.ageRange} — theo đúng định hướng trên
              fanpage
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {packageItems.map((pkg) => (
              <div
                key={pkg.num}
                className="relative rounded-3xl border-2 border-blue-100 bg-white p-8 shadow-sm"
              >
                <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-extrabold text-white">
                  {pkg.num}
                </div>
                <h3 className="mt-2 text-xl font-bold text-primary">
                  {pkg.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-700">
                      <span className="text-green-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#dang-ky-cuoi"
              className="inline-block rounded-2xl bg-accent px-10 py-4 font-bold uppercase text-white shadow-lg transition hover:bg-accent-hover"
            >
              Đăng ký học thử
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-extrabold text-primary md:text-3xl">
            Phụ huynh nói gì sau khi cho con trải nghiệm Nhật Đức?
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-white p-6 shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl">
                    💬
                  </div>
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="leading-relaxed text-gray-700">
                  &quot;{t.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <LocationMap />

      {/* Footer + Form 2 */}
      <footer className="bg-gradient-to-br from-gray-900 to-blue-950 px-4 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <Globe className="h-8 w-8 text-orange-400" />
                <span className="text-2xl font-bold">Nhật Đức</span>
              </div>
              <p className="mt-2 text-lg text-orange-300">{siteInfo.name}</p>
              <p className="mt-1 text-blue-200">{siteInfo.tagline}</p>

              <div className="mt-8 space-y-3 text-blue-100">
                <p>
                  <span className="font-semibold text-white">Hotline:</span>{" "}
                  <a href={`tel:${siteInfo.phoneRaw}`} className="hover:text-white">
                    {siteInfo.phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Facebook:</span>{" "}
                  <a
                    href={siteInfo.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    facebook.com/tnhhgiaoducnhatduc
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Địa chỉ:</span>{" "}
                  {siteInfo.address}
                </p>
                <p>
                  <span className="font-semibold text-white">Bản đồ:</span>{" "}
                  <a
                    href={siteInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Xem trên Google Maps
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Đơn vị:</span>{" "}
                  {siteInfo.legalName}
                </p>
              </div>

              <p className="mt-8 text-sm text-blue-300/60">
                © 2026 {siteInfo.legalName}. All Rights Reserved.
              </p>
            </div>

            <RegisterForm id="dang-ky-cuoi" />
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-3 pr-20 shadow-2xl sm:hidden">
        <a
          href="#dang-ky"
          className="block w-full rounded-xl bg-accent py-3.5 text-center font-bold uppercase text-white"
        >
          Đăng ký học thử miễn phí
        </a>
      </div>

      <ContactWidget />
    </main>
  );
}
