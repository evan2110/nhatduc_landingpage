import { siteInfo } from "@/data/site-content";

export default function FacebookPageEmbed() {
  const src = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    siteInfo.facebookUrl
  )}&tabs=timeline&width=500&height=620&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false`;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-100">
      <div className="border-b border-gray-100 bg-surface px-5 py-4">
        <p className="text-sm font-bold uppercase tracking-wide text-accent">
          Cập nhật từ fanpage
        </p>
        <p className="mt-1 text-sm text-gray-600">
          Bài viết, hình ảnh hoạt động học tập mới nhất từ Nhật Đức
        </p>
      </div>
      <div className="flex justify-center bg-white p-3">
        <iframe
          title="Facebook Trung tâm ngoại ngữ Nhật Đức"
          src={src}
          width="500"
          height="620"
          style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
          scrolling="no"
          allow="encrypted-media"
          className="w-full max-w-[500px]"
        />
      </div>
    </div>
  );
}
