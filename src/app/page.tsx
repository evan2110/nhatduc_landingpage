import { Globe } from "lucide-react";
import RegisterForm from "@/components/RegisterForm";
import {
  benefitsLeft,
  benefitsRight,
  heroPrograms,
  packageItems,
  painPoints,
  showcaseItems,
  siteInfo,
  testimonials,
} from "@/data/site-content";

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 px-4 pb-20 pt-8 text-white md:pb-28 md:pt-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                <Globe className="h-6 w-6 text-orange-400" />
              </div>
              <span className="text-lg font-bold">Nhật Đức</span>
            </div>
            <a
              href="#dang-ky"
              className="hidden rounded-full bg-accent px-6 py-2.5 text-sm font-bold uppercase transition hover:bg-accent-hover sm:inline-block"
            >
              Đăng ký học thử
            </a>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 inline-block rounded-full bg-orange-500/20 px-4 py-1 text-sm font-medium text-orange-200">
                📌 Trung tâm chuyên bồi dưỡng kỹ năng cho trẻ {siteInfo.ageRange}
              </p>
              <h1 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                {siteInfo.name} — Hành trang vào lớp 1, Tiếng Anh, Toán tư duy
                &amp; Dạy vẽ tại Lệ Thủy, Quảng Bình
              </h1>
              <p className="mt-5 text-lg text-blue-100">
                Giải pháp giúp con sẵn sàng vào lớp 1, tự tin giao tiếp tiếng
                Anh và phát triển tư duy — ba mẹ an tâm từng bước.
              </p>
              <a
                href="#dang-ky"
                className="mt-8 inline-block rounded-2xl bg-accent px-10 py-4 text-lg font-bold uppercase shadow-xl transition hover:bg-accent-hover hover:shadow-2xl"
              >
                Đăng ký học thử
              </a>
            </div>

            <div className="relative hidden md:block">
              <div className="animate-float rounded-3xl bg-white/10 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {heroPrograms.map((program) => (
                    <div
                      key={program}
                      className="rounded-2xl bg-white/10 px-4 py-6 text-center text-base font-semibold"
                    >
                      {program}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-center text-sm text-blue-200">
                  {siteInfo.followers} phụ huynh theo dõi trên Facebook • Lệ
                  Thủy, Quảng Bình
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-surface-warm px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-extrabold text-primary md:text-4xl">
            Có phải ba mẹ đã từng gặp những vấn đề sau
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Ba mẹ từng lo lắng khi thấy các bạn nhỏ cùng tuổi đã tự tin vào lớp
            1, giao tiếp tiếng Anh và tư duy tốt hơn con mình?
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((item) => (
              <div
                key={item.num}
                className="group rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:border-orange-300 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-extrabold text-white">
                  {item.num}
                </div>
                <p className="leading-relaxed text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Form Section 1 */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <RegisterForm id="dang-ky" />
        </div>
      </section>

      {/* Endorsement */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="flex justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-6xl">
                👩‍💼
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-primary">
                {siteInfo.director.toUpperCase()}
              </h3>
              <p className="mt-1 font-semibold text-accent">
                {siteInfo.directorTitle}
              </p>
              <blockquote className="mt-4 border-l-4 border-accent pl-4 italic leading-relaxed text-gray-700">
                &quot;Chúng tôi xây dựng {siteInfo.name} với sứ mệnh bồi dưỡng
                kỹ năng toàn diện cho trẻ — từ Hành trang vào lớp 1, Tiếng Anh,
                Toán tư duy đến Dạy vẽ. Mỗi em được học đúng lứa tuổi, đúng
                năng lực và được đồng hành tận tâm.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary px-4 py-12 text-center text-white">
        <h2 className="text-2xl font-extrabold md:text-3xl">
          Cùng con chuẩn bị hành trang vững vàng vào lớp 1
        </h2>
        <a
          href="#dang-ky-cuoi"
          className="mt-6 inline-block rounded-2xl bg-accent px-10 py-4 font-bold uppercase transition hover:bg-accent-hover"
        >
          Đăng ký học thử
        </a>
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
                  <a href={`tel:${siteInfo.phone.replace(/\s/g, "")}`} className="hover:text-white">
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
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-3 shadow-2xl sm:hidden">
        <a
          href="#dang-ky"
          className="block w-full rounded-xl bg-accent py-3.5 text-center font-bold uppercase text-white"
        >
          Đăng ký học thử miễn phí
        </a>
      </div>
    </main>
  );
}
