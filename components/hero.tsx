import Image from "next/image";

interface HeroProps {
  imagePath: string;
  splashText: string;
}

export function Hero({ imagePath, splashText }: HeroProps) {
  return (
    <div className="relative w-full h-[40vh] -z-10">
      <Image
        src={imagePath}
        alt="Hero background"
        fill
        className="object-cover brightness-[.25]"
      />
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-0 flex items-center pb-[15%] justify-center">
        <h1 className="text-6xl font-bold text-slate-50">{splashText}</h1>
      </div>
    </div>
  );
}
