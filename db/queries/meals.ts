import { db } from "@/db";

export async function getMeals() {
  const meals = await db.query.meals.findMany();

  return meals;
}

export async function getMeal(id: string) {
  const meal = await db.query.meals.findFirst({
    where: (meals, { eq }) => eq(meals.id, id),
  });

  return meal;
}
