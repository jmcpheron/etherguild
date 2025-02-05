import { createQuest } from "@/app/api/quests/actions/create";
import { getAllQuests } from "@/app/api/quests/actions/list";

export const POST = createQuest;
export const GET = getAllQuests;
