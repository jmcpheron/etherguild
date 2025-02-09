import Image from "next/image";
import { officers, Officer } from "./guild-officers";

export function OfficerLogos() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Guild Houses</h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {officers.map((officer: Officer, index: number) => (
          <div key={index} className="relative group">
            <Image
              src={officer.logo}
              alt={`${officer.house} logo`}
              width={60}
              height={60}
              className="rounded-full shadow-md transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
