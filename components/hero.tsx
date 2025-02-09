import Image from "next/image";
import { cn } from "../lib/utils";

interface HeroProps {
  imagePath: string;
  splashText: string;
  className?: string;
}

export function Hero({ imagePath, splashText, className }: HeroProps) {
  return (
    <div className={cn("relative w-full h-[40vh] -z-10", className)}>
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
