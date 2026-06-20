import { NextResponse } from "next/server";
import { registrationCourses } from "@/data/site-content";

export type RegisterPayload = {
  studentName: string;
  studentDob: string;
  parentName: string;
  phone: string;
  course: string;
  email?: string;
};

const courseLabels = new Map(
  registrationCourses.map((c) => [c.value, c.label])
);

function validate(body: Partial<RegisterPayload>): string | null {
  if (!body.studentName?.trim()) return "Vui lòng nhập họ tên học sinh";
  if (!body.studentDob?.trim()) return "Vui lòng nhập ngày sinh học sinh";
  if (!body.parentName?.trim()) return "Vui lòng nhập họ tên phụ huynh";
  if (!body.phone?.trim()) return "Vui lòng nhập số điện thoại";
  if (!body.course?.trim()) return "Vui lòng chọn lớp học/môn học";
  if (!courseLabels.has(body.course as typeof registrationCourses[number]["value"]))
    return "Lớp học không hợp lệ";
  return null;
}

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    return NextResponse.json(
      {
        error:
          "Hệ thống chưa cấu hình Google Sheet. Liên hệ qua Zalo/Messenger.",
      },
      { status: 503 }
    );
  }

  let body: Partial<RegisterPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ" }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const courseKey = body.course as typeof registrationCourses[number]["value"];
  const courseLabel = courseLabels.get(courseKey);
  if (!courseLabel) {
    return NextResponse.json({ error: "Lớp học không hợp lệ" }, { status: 400 });
  }

  const payload = {
    studentName: body.studentName!.trim(),
    studentDob: body.studentDob!.trim(),
    parentName: body.parentName!.trim(),
    phone: body.phone!.trim(),
    course: courseLabel,
    email: body.email?.trim() || "",
  };

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const raw = await response.text();
    let result: { success?: boolean; error?: string } = {};

    try {
      result = JSON.parse(raw);
    } catch {
      return NextResponse.json(
        { error: "Phản hồi từ Google Sheet không hợp lệ" },
        { status: 502 }
      );
    }

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { error: result.error || "Không ghi được vào Google Sheet" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Không kết nối được Google Sheet. Thử lại sau." },
      { status: 502 }
    );
  }
}
