import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.portfolioProject.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Failed to fetch portfolio:", error);
    return NextResponse.json({ error: "Failed to fetch portfolio" }, { status: 500 });
  }
}
