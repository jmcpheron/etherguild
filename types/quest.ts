import { Quest } from "@prisma/client";

export type QuestProps = Pick<
  Quest,
  "title" | "summary" | "description" | "link" | "progress"
> & {
  isMain?: boolean;
};
