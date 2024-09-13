import { resetDatabase } from "@/db/reset";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  resetDatabase();

  return NextResponse.json({
    message: "Database reset to seed state successfully.",
  });
}
