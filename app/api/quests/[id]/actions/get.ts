import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function getQuest(id: string) {
  try {
    const quest = await prisma.quest.findUnique({
      where: { id },
    });

    if (!quest) {
      return NextResponse.json({ error: "Quest not found" }, { status: 404 });
    }

    return NextResponse.json(quest);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch quest",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
