import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    console.log("Database URL:", process.env.DATABASE_URL);
    console.log("Attempting to connect to database...");

    // Test connection
    await prisma.$connect();
    console.log("Database connected successfully");

    const body = await request.json();
    console.log("Request body:", body);

    const quest = await prisma.quest.create({
      data: {
        title: body.title,
        description: body.description,
        isMain: body.isMain || false,
        isActive: body.isActive || false,
        progress: body.progress || 0,
      },
    });

    return NextResponse.json(quest);
  } catch (error) {
    console.error("Full error:", error);
    return NextResponse.json(
      {
        error: "Failed to create quest",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Add a GET endpoint to verify
export async function GET() {
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
