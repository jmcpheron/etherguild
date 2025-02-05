import { getQuest } from "../actions/get";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return getQuest(params.id);
}
