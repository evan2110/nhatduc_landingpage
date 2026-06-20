"use client";

import { useState } from "react";

interface RegisterFormProps {
  id?: string;
  variant?: "inline" | "card";
}

export default function RegisterForm({
  id = "dang-ky",
  variant = "card",
}: RegisterFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div
        id={id}
        className={`text-center ${variant === "card" ? "rounded-3xl bg-white p-8 shadow-xl md:p-10" : ""}`}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          ✓
        </div>
        <h3 className="text-xl font-bold text-primary">Đăng ký thành công!</h3>
        <p className="mt-2 text-gray-600">
          Cảm ơn ba/mẹ đã đăng ký. Nhật Đức sẽ liên hệ trong vòng 24 giờ để
          sắp xếp buổi học thử miễn phí.
        </p>
      </div>
    );
  }

  const formContent = (
    <>
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-extrabold uppercase tracking-wide text-primary md:text-3xl">
          Đăng ký học thử
        </h3>
        <p className="mt-1 text-xl font-bold uppercase text-accent">
          Miễn phí
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          type="text"
          name="name"
          placeholder="Họ và tên phụ huynh / học viên *"
          className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-primary-light focus:ring-2 focus:ring-blue-100"
        />
        <input
          required
          type="tel"
          name="phone"
          placeholder="Số điện thoại *"
          className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-primary-light focus:ring-2 focus:ring-blue-100"
        />
        <input
          type="email"
          name="email"
          placeholder="Email (không bắt buộc)"
          className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-primary-light focus:ring-2 focus:ring-blue-100"
        />
        <select
          required
          name="course"
          defaultValue=""
          className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-700 outline-none transition focus:border-primary-light focus:ring-2 focus:ring-blue-100"
        >
          <option value="" disabled>
            Chọn chương trình quan tâm *
          </option>
          <option value="hanh-trang">Hành trang vào lớp 1</option>
          <option value="tieng-anh">Tiếng Anh giao tiếp</option>
          <option value="toan-tu-duy">Toán tư duy</option>
          <option value="day-ve">Dạy vẽ sáng tạo</option>
          <option value="tu-van">Tư vấn lộ trình</option>
        </select>
        <textarea
          name="note"
          rows={2}
          placeholder="Ghi chú thêm (tuổi con, trình độ hiện tại...)"
          className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition focus:border-primary-light focus:ring-2 focus:ring-blue-100"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-accent py-4 text-base font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-accent-hover disabled:opacity-70"
        >
          {loading ? "Đang gửi..." : "Đăng ký ngay"}
        </button>
      </form>

      <p className="mt-4 text-center text-xs leading-relaxed text-gray-500">
        * Thông tin ba/mẹ để lại được dùng để sắp xếp buổi học thử, vui lòng
        điền thông tin chính xác.
      </p>
      <p className="mt-2 text-center text-xs leading-relaxed text-gray-500">
        Lưu ý: Buổi học thử giúp xác định lộ trình phù hợp theo độ tuổi và năng
        lực của con (4 – 12 tuổi).
      </p>
    </>
  );

  if (variant === "inline") {
    return (
      <div id={id} className="mx-auto max-w-md">
        {formContent}
      </div>
    );
  }

  return (
    <div
      id={id}
      className="mx-auto max-w-lg rounded-3xl bg-white p-6 shadow-2xl md:p-10"
    >
      {formContent}
    </div>
  );
}
