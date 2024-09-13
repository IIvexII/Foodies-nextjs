import { db } from "./index";
import { meals } from "./schema";
import { dummyMeals } from "./seed";

import { UTApi } from "uploadthing/server";

function ensureUtf8String(str: string): string {
  return Buffer.from(str, "utf8").toString("utf8");
}

export async function resetDatabase() {
  try {
    await db.delete(meals).execute();
    console.log("Meals deleted successfully.");

    const senitizedMeals = [];

    for (const meal of dummyMeals) {
      meal.title = ensureUtf8String(meal.title);
      meal.slug = ensureUtf8String(meal.slug);
      meal.summary = ensureUtf8String(meal.summary);
      meal.instructions = ensureUtf8String(meal.instructions);
      meal.creator = ensureUtf8String(meal.creator);
      meal.creator_email = ensureUtf8String(meal.creator_email);

      senitizedMeals.push({
        title: meal.title,
        slug: meal.slug,
        image: meal.image,
        summary: meal.summary,
        instructions: meal.instructions,
        creator: meal.creator,
        creator_email: meal.creator_email,
        created_at: new Date().toISOString(),
      });
    }

    await db.insert(meals).values(senitizedMeals).execute();

    const utapi = new UTApi();
    const uploadedFiles = await utapi.listFiles();

    const deletePromises = uploadedFiles.files.map((file) =>
      utapi.deleteFiles(file.key),
    );
    await Promise.all(deletePromises);

    console.log("Uploaded files deleted successfully.");
    console.log("Database reset to seed state successfully.");
  } catch (error) {
    console.error(
      "Error resetting database or deleting uploaded files:",
      error,
    );
  }
}
