export const siteInfo = {
  name: "Trung tâm ngoại ngữ Nhật Đức",
  legalName: "Công ty TNHH Phát triển Giáo dục Nhật Đức",
  tagline: "Bồi dưỡng kỹ năng — Học thật vui, tiến bộ thật chắc",
  facebookUrl: "https://www.facebook.com/tnhhgiaoducnhatduc",
  phone: "0888 705 868",
  /** Số gọi / tel: — bỏ khoảng trắng */
  phoneRaw: "0888705868",
  /** Messenger — chat trực tiếp với fanpage */
  messengerUrl: "https://m.me/tnhhgiaoducnhatduc",
  /**
   * Zalo — hiện dùng cá nhân; khi có Zalo OA/page trung tâm, đổi type + url:
   * personal: https://zalo.me/0888705868
   * oa:       https://zalo.me/o/[oa-id-trung-tam]
   */
  zalo: {
    type: "personal" as "personal" | "oa",
    url: "https://zalo.me/0888705868",
    label: "Chat qua Zalo",
  },
  address:
    "Đội 1, Thôn Phú Hòa, Xã Phú Thủy, Huyện Lệ Thủy, Tỉnh Quảng Bình",
  director: "Nguyễn Thị Duyến",
  directorTitle: "Người đại diện pháp luật — Công ty TNHH Phát triển Giáo dục Nhật Đức",
  followers: "1.500+",
  ageRange: "4 – 12 tuổi",
};

/** Nhãn khớp cột F trên Google Sheet */
export const registrationCourses = [
  { value: "hanh-trang", label: "Lớp Hành trang vào Lớp 1" },
  { value: "tieng-anh", label: "Lớp Tiếng Anh giao tiếp" },
  { value: "toan-tu-duy", label: "Lớp Toán tư duy" },
  { value: "day-ve", label: "Lớp Dạy vẽ sáng tạo" },
  { value: "tu-van", label: "Tư vấn lộ trình" },
] as const;

export const googleSheet = {
  id: "13HqioIU-wurJxUc0c_3XwX6K2N0kuy8rWKcUQoWpxxo",
  tabName: "Câu trả lời biểu mẫu 1",
  url: "https://docs.google.com/spreadsheets/d/13HqioIU-wurJxUc0c_3XwX6K2N0kuy8rWKcUQoWpxxo/edit",
};

export const leadership = [
  {
    name: "Nguyễn Thị Duyến",
    title: "Người đại diện pháp luật — Công ty TNHH Phát triển Giáo dục Nhật Đức",
    image: "/team/nguyen-thi-duyen.png",
    imagePosition: "center 15%",
    quote:
      "Chúng tôi xây dựng Trung tâm ngoại ngữ Nhật Đức với sứ mệnh bồi dưỡng kỹ năng toàn diện cho trẻ — từ Hành trang vào lớp 1, Tiếng Anh, Toán tư duy đến Dạy vẽ. Mỗi em được học đúng lứa tuổi, đúng năng lực và được đồng hành tận tâm.",
    imageOnLeft: true,
  },
  {
    name: "Đỗ Nhật Đức",
    title: "Ban quản trị — Công ty TNHH Phát triển Giáo dục Nhật Đức",
    image: "/team/do-nhat-duc.png",
    imagePosition: "center center",
    quote:
      "Ban quản trị cam kết đầu tư liên tục vào chương trình học, đội ngũ giảng dạy và môi trường học tập để Nhật Đức trở thành địa chỉ giáo dục tin cậy, giúp thế hệ trẻ Quảng Bình phát triển bền vững.",
    imageOnLeft: false,
  },
] as const;

export const heroPrograms = [
  "🎒 Hành trang vào lớp 1",
  "🇬🇧 Tiếng Anh giao tiếp",
  "🧮 Toán tư duy",
  "🎨 Dạy vẽ sáng tạo",
];

export const painPoints = [
  {
    num: 1,
    text: "Con sắp vào lớp 1 nhưng chưa tự tin với chữ cái, toán cơ bản và kỹ năng sống hằng ngày?",
  },
  {
    num: 2,
    text: "Con học tiếng Anh nhưng ngại nói, chưa dám giao tiếp tự nhiên?",
  },
  {
    num: 3,
    text: "Ba mẹ khó tìm lớp quy mô nhỏ, giáo viên theo sát từng em ở địa phương?",
  },
  {
    num: 4,
    text: "Con cần rèn tư duy logic qua Toán tư duy nhưng chưa có môi trường phù hợp?",
  },
  {
    num: 5,
    text: "Con yêu thích vẽ, cần phát triển sáng tạo song song với việc học?",
  },
  {
    num: 6,
    text: "Không biết chọn chương trình nào phù hợp cho trẻ từ 4 – 12 tuổi?",
  },
];

export const benefitsLeft = [
  "Chương trình Hành trang vào lớp 1 — giúp con làm quen nề nếp, kiến thức và tâm lý trước khi vào tiểu học.",
  "Tiếng Anh giao tiếp — rèn phản xạ nghe nói, tự tin giao tiếp trong môi trường thân thiện.",
  "Toán tư duy & Dạy vẽ cho trẻ 4 – 12 tuổi — phát triển logic, sáng tạo và sự tập trung.",
  "Lớp học quy mô nhỏ, học viên được quan tâm sát sao, phù hợp trẻ nhỏ tại Lệ Thủy, Quảng Bình.",
];

export const benefitsRight = [
  "Bồi dưỡng kỹ năng toàn diện: học tập, giao tiếp, tư duy và kỹ năng sống cho trẻ.",
  "Phương pháp học mà chơi — sinh động, gần gũi, phù hợp tâm lý lứa tuổi mầm non & tiểu học.",
  "Tư vấn lộ trình theo độ tuổi và năng lực thực tế của từng em.",
  "Đơn vị đào tạo uy tín — Công ty TNHH Phát triển Giáo dục Nhật Đức, hoạt động từ 2025.",
];

export const showcaseItems = [
  {
    title: "Hành trang vào lớp 1",
    desc: "Chuẩn bị toàn diện kiến thức, kỹ năng và tâm lý giúp con tự tin bước vào lớp 1",
    emoji: "🎒",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Toán tư duy & Dạy vẽ",
    desc: "Phát triển tư duy logic và khả năng sáng tạo cho trẻ từ 4 – 12 tuổi",
    emoji: "🎨",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Tiếng Anh giao tiếp",
    desc: "Rèn phản xạ nghe – nói, tự tin giao tiếp tiếng Anh mỗi ngày",
    emoji: "🇬🇧",
    color: "from-emerald-500 to-teal-600",
  },
];

export const packageItems = [
  {
    num: 1,
    title: "Hành trang vào lớp 1",
    items: [
      "Làm quen chữ cái, toán cơ bản và nề nếp học tập",
      "Rèn kỹ năng sống, tự tin trước ngày khai giảng",
    ],
  },
  {
    num: 2,
    title: "Bồi dưỡng kỹ năng",
    items: [
      "Toán tư duy & Dạy vẽ cho trẻ 4 – 12 tuổi",
      "Hoạt động học mà chơi, phát triển tư duy sáng tạo",
    ],
  },
  {
    num: 3,
    title: "Tiếng Anh giao tiếp",
    items: [
      "Luyện nghe – nói, phản xạ giao tiếp thực tế",
      "Môi trường thân thiện, khuyến khích con mạnh dạn nói",
    ],
  },
];

export const testimonials = [
  {
    name: "Chị Trần Thị Hương",
    role: "Phụ huynh bé 5 tuổi — Hành trang vào lớp 1",
    quote:
      "Con được làm quen chữ và toán qua hoạt động vui, lên lớp 1 đỡ bỡ ngỡ hơn hẳn. Thầy cô quan tâm từng em rất kỹ.",
  },
  {
    name: "Anh Nguyễn Văn Tài",
    role: "Phụ huynh bé 8 tuổi — Tiếng Anh",
    quote:
      "Trước con rất ngại nói tiếng Anh, sau vài tháng đã tự tin hơn khi giao tiếp cơ bản với thầy cô.",
  },
  {
    name: "Chị Lê Thị Mai",
    role: "Phụ huynh bé 7 tuổi — Toán tư duy",
    quote:
      "Con thích giờ Toán tư duy vì có nhiều trò chơi logic. Tư duy và sự tập trung của con tiến bộ rõ rệt.",
  },
  {
    name: "Chị Phạm Thu Hà",
    role: "Phụ huynh bé 6 tuổi — Dạy vẽ",
    quote:
      "Vừa học vừa vẽ giúp con hứng thú hơn với việc học. Lớp nhỏ nên cô sửa và hướng dẫn rất sát.",
  },
];
