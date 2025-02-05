import { Quest } from "@/components/quest";
import { type Quest as QuestType } from "@/types/quest";

interface ActiveQuestProps {
  quest: QuestType;
}

export function ActiveQuest({ quest }: ActiveQuestProps) {
  return <Quest id={quest.id} />;
}
