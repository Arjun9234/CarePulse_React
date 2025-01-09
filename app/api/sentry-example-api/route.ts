import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  // Throwing an error for testing Sentry
  throw new Error("Sentry Example API Route Error");

  // This line will never be reached, so it's unnecessary
  // return NextResponse.json({ data: "Testing Sentry Error..." });
}


