"use client";

import { useQuests } from "@/app/hooks/useQuests";
import { Hero } from "@/components/hero";
import { ProposedQuests } from "@/components/home/proposed-quests";
import { Quest } from "@/components/quest";
import { ProposedQuestsSkeleton } from "@/components/skeletons/proposed-quests-skeleton";
import { Suspense } from "react";
import { OfficerLogos } from "@/components/about/officer-logos";

export default function Home() {
  const { data: quests, isLoading, error } = useQuests();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading quests</div>;
  if (!quests) return null;

  const mainQuest = quests.find((quest) => quest.isMain);
  const activeQuests = quests.filter(
    (quest) => quest.isActive && !quest.isMain
  );
  const proposedQuests = quests.filter((quest) => !quest.isActive);

  return (
    <main className="flex min-h-screen flex-col">
      <Hero
        imagePath="/image/ether-guild-hero.png"
        splashText="Fund ETH Initiatives"
      />
      <div className="-mt-[15%] relative z-10">
        {mainQuest && (
          <div className="max-w-7xl mx-auto w-full px-4">
            <Quest key={mainQuest.id} id={mainQuest.id} />
          </div>
        )}
      </div>
      <div className="mt-16">
        <div className="max-w-7xl mx-auto w-full px-4">
          <h2 className="text-3xl font-bold mb-8">Active Quests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeQuests.map((quest) => (
              <Quest key={quest.id} id={quest.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16 mb-16">
        <Suspense fallback={<ProposedQuestsSkeleton />}>
          <ProposedQuests quests={proposedQuests} />
        </Suspense>
      </div>
      <div className="container mx-auto px-4 py-4 mb-5">
        <OfficerLogos />
      </div>
    </main>
  );
}
