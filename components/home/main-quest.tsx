import { Quest } from "@/components/quest";
import { type Quest as QuestType } from "@/types/quest";

interface MainQuestProps {
  quest: QuestType;
}

export function MainQuest({ quest }: MainQuestProps) {
  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <Quest id={quest.id} />
    </div>
  );
}
