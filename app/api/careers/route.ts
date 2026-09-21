import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const jobs = await prisma.jobOpening.findMany({
      where: { isOpen: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Failed to fetch careers:", error);
    return NextResponse.json({ error: "Failed to fetch careers" }, { status: 500 });
  }
}
