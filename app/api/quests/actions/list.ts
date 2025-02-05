import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function getAllQuests() {
  try {
    const quests = await prisma.quest.findMany();
    return NextResponse.json(quests);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch quests",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
