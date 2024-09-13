import { resetDatabase } from "@/db/reset";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  resetDatabase();

  return NextResponse.json({
    message: "Database reset to seed state successfully.",
  });
}
