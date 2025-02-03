import Image from "next/image";

interface HeroProps {
  imagePath: string;
  splashText: string;
}

export function Hero({ imagePath, splashText }: HeroProps) {
  return (
    <div className="relative w-full h-[60vh] -z-10">
      <Image
        src={imagePath}
        alt="Hero image"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-background to-transparent" />
      <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-slate-900 dark:text-slate-50">
        {splashText}
      </h1>
    </div>
  );
}
