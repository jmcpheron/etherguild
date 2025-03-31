"use client";

import Image from "next/image";
import Link from "next/link";
import { useNavbar } from "@/app/contexts/navbar-context";
import { useEffect } from "react";

export default function HomePage() {
  const { setShowNavbar } = useNavbar();

  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true);
  }, [setShowNavbar]);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Background Container */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/image/ether-guild-background-vertical.png"
            alt="Hero background"
            fill
            className="object-cover brightness-[.25]"
            priority
          />
        </div>
        {/* Optional gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-background to-transparent -z-10" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center -mt-20 z-10 px-4 text-center">
          {/* Logo */}
          <div className="w-[85%] sm:w-1/2 max-w-xl mb-8">
            <Image
              src="/image/ether-guild-logo-dark-mode.png"
              alt="Ether Guild Logo Dark Mode"
              width={800}
              height={400}
              className="hidden dark:block w-full h-auto"
              priority
            />
            <Image
              src="/image/ether-guild-logo-light-mode.png"
              alt="Ether Guild Logo Light Mode"
              width={800}
              height={400}
              className="dark:hidden block w-full h-auto"
              priority
            />
          </div>

          {/* Text and CTA */}
          <h2 className="text-5xl sm:text-6xl font-bold text-white mt-8 mb-8 px-4">
            Fund ETH Initiatives
          </h2>
          <Link
            href="https://paragraph.xyz/@etherguild/introducing-ether-guild"
            className="px-8 py-3 bg-[#A23B23] text-white rounded-lg text-lg font-semibold hover:bg-[#8B3220] transition-colors"
          >
            Read More
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-4 mt-6">
            <Link
              href="/about"
              className="px-6 py-2 bg-white/10 text-white rounded-lg text-base font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              About Us
            </Link>
            <Link
              href="/discord"
              className="px-6 py-2 bg-white/10 text-white rounded-lg text-base font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Join Discord
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <Link
              href="https://x.com/TheEtherGuild"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white/10 text-white rounded-lg text-base font-medium hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center gap-2"
            >
              <span>𝕏</span>
              Follow on X
            </Link>
            <Link
              href="https://warpcast.com/etherguild"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white/10 text-white rounded-lg text-base font-medium hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center gap-2"
            >
              <span>🔗</span>
              Follow on Farcaster
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
