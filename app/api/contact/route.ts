import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Save directly to the live Supabase PostgreSQL database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        service: service || null,
        message,
        status: "new",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      id: submission.id,
    });
  } catch (error) {
    console.error("Error saving contact submission:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
