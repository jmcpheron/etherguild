"use client";

import { Suspense } from "react";
import { Hero } from "@/components/hero";
import { QuestContent } from "@/components/home/quest-content";
import { Loading } from "@/components/loading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero
        imagePath="/image/ether-guild-hero.png"
        splashText="Fund ETH Initiatives"
      />
      <Suspense fallback={<Loading />}>
        <QuestContent />
      </Suspense>
    </main>
  );
}
