import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { WalletComponents } from "@/components/wallet/wallet";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50 bg-background/20 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Image
          src="/image/ether-guild-logo.png"
          alt="EtherGuild Logo"
          width={24}
          height={24}
        />
        <span className="font-bold text-white">Ether Guild</span>
      </div>

      <div className="flex items-center gap-4 relative z-[60]">
        <WalletComponents />
        <ModeToggle />
      </div>
    </nav>
  );
}
