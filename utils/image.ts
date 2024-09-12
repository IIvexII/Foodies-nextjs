// copy from this amazing article:
// https://dev.to/dpnunez/nextjs-image-loading-with-blur-effect-a-step-by-step-guide-4f64#:~:text=In%20this%20case,%20Next.js%20takes%20care%20of%20all

"use server";

import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

function bufferToBase64(buffer: Buffer): string {
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

async function getFileBufferLocal(filepath: string) {
  // filepath is file addess exactly how is used in Image component (/ = public/)
  const realFilepath = path.join(process.cwd(), "public", filepath);
  return fs.readFile(realFilepath);
}

export async function getPlaceholderImage(filepath: string) {
  try {
    const originalBuffer = await getFileBufferLocal(filepath);
    const resizedBuffer = await sharp(originalBuffer).resize(20).toBuffer();
    return bufferToBase64(resizedBuffer);
  } catch {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==";
  }
}
