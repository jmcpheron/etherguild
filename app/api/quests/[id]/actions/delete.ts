import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function deleteQuest(id: string) {
  try {
    await prisma.quest.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to delete quest",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
