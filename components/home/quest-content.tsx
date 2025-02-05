"use client";

import { MainQuest } from "@/components/home/main-quest";
import { ActiveQuests } from "@/components/home/active-quests";
import { ProposedQuests } from "@/components/home/proposed-quests";
import { useQuests } from "@/app/hooks/useQuests";

export function QuestContent() {
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
    <>
      <div className="-mt-[15%] relative z-10">
        {mainQuest && <MainQuest quest={mainQuest} />}
      </div>
      <div className="mt-16">
        <ActiveQuests quests={activeQuests} />
      </div>
      <div className="mt-16 mb-16">
        <ProposedQuests quests={proposedQuests} />
      </div>
    </>
  );
}
