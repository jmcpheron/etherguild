import { Quest } from "@/components/quest";

interface ActiveQuestProps {
  title: string;
  description: string;
  link: string;
  percent: number;
}

export function ActiveQuest(props: ActiveQuestProps) {
  return <Quest {...props} />;
}
