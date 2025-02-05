import { getQuest } from "@/app/api/quests/[id]/actions/get";
import { updateQuest } from "@/app/api/quests/[id]/actions/update";
import { deleteQuest } from "@/app/api/quests/[id]/actions/delete";
import { NextRequest } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  return getQuest(id);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  return updateQuest(request, id);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  return deleteQuest(id);
}
