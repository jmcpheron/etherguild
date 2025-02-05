import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { z } from "zod";

const updateQuestSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  link: z.string().optional(),
  isMain: z.boolean().optional(),
  isActive: z.boolean().optional(),
  progress: z.number().min(0).max(100).optional(),
});

export async function updateQuest(request: NextRequest, id: string) {
  try {
    const data = await request.json();
    const validatedData = updateQuestSchema.parse(data);

    const quest = await prisma.quest.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(quest);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to update quest",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 }
    );
  }
}
