import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trung tâm ngoại ngữ Nhật Đức | Học thử miễn phí",
  description:
    "Trung tâm bồi dưỡng kỹ năng cho trẻ 4–12 tuổi tại Lệ Thủy, Quảng Bình: Hành trang vào lớp 1, Tiếng Anh, Toán tư duy, Dạy vẽ. Đăng ký học thử miễn phí!",
  openGraph: {
    title: "Trung tâm ngoại ngữ Nhật Đức",
    description:
      "Hành trang vào lớp 1 • Tiếng Anh • Toán tư duy • Dạy vẽ cho trẻ 4–12 tuổi tại Quảng Bình.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
