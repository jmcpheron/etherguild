import Image from "next/image";

interface HeroProps {
  imagePath: string;
}

export function Hero({ imagePath }: HeroProps) {
  return (
    <div className="relative w-full h-[60vh]">
      <Image
        src={imagePath}
        alt="Hero image"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
