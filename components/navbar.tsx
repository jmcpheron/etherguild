import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { WalletComponents } from "@/components/wallet/wallet";
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/image/ether-guild-logo.png"
            alt="EtherGuild Logo"
            width={24}
            height={24}
          />
        </Link>
        <span className="font-bold text-white">Ether Guild</span>
      </div>

      <div className="flex items-center gap-4">
        <a href="/about" className="text-white hover:text-gray-300">
          About
        </a>
        <WalletComponents />
        <ModeToggle />
      </div>
    </nav>
  );
}
