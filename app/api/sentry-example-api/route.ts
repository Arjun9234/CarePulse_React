import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  try {
    throw new Error("Sentry Example API Route Error");
    return NextResponse.json({ data: "Testing Sentry Error..." });
  } catch (error) {
    // Handle the error and send a response
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

