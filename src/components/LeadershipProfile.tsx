import Image from "next/image";

type LeadershipProfileProps = {
  name: string;
  title: string;
  image: string;
  quote: string;
  imageOnLeft: boolean;
  imagePosition?: string;
};

export default function LeadershipProfile({
  name,
  title,
  image,
  quote,
  imageOnLeft,
  imagePosition = "center top",
}: LeadershipProfileProps) {
  const photo = (
    <div className="flex justify-center">
      <div className="relative h-56 w-56 overflow-hidden rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg ring-4 ring-white md:h-64 md:w-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          style={{ objectPosition: imagePosition }}
          sizes="(max-width: 768px) 224px, 256px"
        />
      </div>
    </div>
  );

  const content = (
    <div>
      <h3 className="text-2xl font-extrabold text-primary">{name.toUpperCase()}</h3>
      <p className="mt-1 font-semibold text-accent">{title}</p>
      <blockquote className="mt-4 border-l-4 border-accent pl-4 italic leading-relaxed text-gray-700">
        &quot;{quote}&quot;
      </blockquote>
    </div>
  );

  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      {imageOnLeft ? (
        <>
          {photo}
          {content}
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{content}</div>
          <div className="order-1 md:order-2">{photo}</div>
        </>
      )}
    </div>
  );
}
