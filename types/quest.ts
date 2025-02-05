export interface Quest {
  id: string;
  title: string;
  description: string;
  link: string;
  percent: number;
  isMain?: boolean;
  isActive: boolean;
  progress: number;
  createdAt: Date;
  updatedAt: Date;
}

export type QuestProps = Pick<
  Quest,
  "title" | "description" | "link" | "percent"
> & {
  isMain?: boolean;
};
