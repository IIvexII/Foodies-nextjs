import { db } from "@/db";
import { meals } from "../schema";

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

export async function createMeal(meal: any) {
  const newMeal = await db.insert(meals).values(meal).execute();

  return newMeal;
}
