import { ActiveQuest } from "./active-quest";
import { type Quest } from "@/types/quest";

interface ActiveQuestsProps {
  quests: Quest[];
}

export function ActiveQuests({ quests }: ActiveQuestsProps) {
  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <h2 className="text-3xl font-bold mb-8">Active Quests</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quests.map((quest) => (
          <ActiveQuest key={quest.id} quest={quest} />
        ))}
      </div>
    </div>
  );
}
