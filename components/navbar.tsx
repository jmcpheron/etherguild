import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50">
      <div className="flex items-center gap-2">
        <Image
          src="/image/ether-guild-logo.png"
          alt="EtherGuild Logo"
          width={24}
          height={24}
        />
        <span className="font-bold text-white">Ether Guild</span>
      </div>
      <ModeToggle />
    </nav>
  );
}
