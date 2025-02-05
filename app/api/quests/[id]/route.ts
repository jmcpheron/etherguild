import { getQuest } from "@/app/api/quests/[id]/actions/get";
import { updateQuest } from "@/app/api/quests/[id]/actions/update";
import { deleteQuest } from "@/app/api/quests/[id]/actions/delete";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return getQuest(params.id);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return updateQuest(request, params.id);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return deleteQuest(params.id);
}
