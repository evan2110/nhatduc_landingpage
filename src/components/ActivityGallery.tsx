import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/data/site-content";

export type ActivityImage = {
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
};

type ActivityGalleryProps = {
  images: readonly ActivityImage[];
};

export default function ActivityGallery({ images }: ActivityGalleryProps) {
  const featured = images.find((img) => img.featured) ?? images[0];
  const rest = images.filter((img) => img !== featured);

  return (
    <div className="space-y-4">
      {featured && (
        <figure className="group relative overflow-hidden rounded-3xl shadow-lg">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4 text-sm font-medium text-white">
            {featured.caption}
          </figcaption>
        </figure>
      )}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {rest.map((image) => (
          <figure
            key={image.src}
            className="group relative overflow-hidden rounded-2xl shadow-md"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 py-3 text-xs font-medium leading-snug text-white">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <Link
        href={`${siteInfo.facebookUrl}/photos`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
      >
        Xem thêm album ảnh trên Facebook →
      </Link>
    </div>
  );
}
