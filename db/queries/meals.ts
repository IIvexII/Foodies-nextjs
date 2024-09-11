import { db } from "@/db";

export async function getMeals() {
  const meals = await db.query.meals.findMany();

  return meals;
}
