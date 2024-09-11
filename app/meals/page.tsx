import { CTAButton } from "@/components/cta-button";
import HighLightedText from "@/components/highlighted-text";
import MealGrid from "@/components/image/meal-grid";
import { db } from "@/db";
export default async function MealsPage() {
  // extracting all the meals
  const meals = await db.query.meals.findMany({
    columns: {
      id: true,
      title: true,
      image: true,
      slug: true,
      summary: true,
      creator: true,
    },
  });

  return (
    <>
      <header className="mt-16 flex flex-col gap-6 px-16">
        <h1 className="text-6xl font-semibold">
          Delicious meeals, created <HighLightedText>by you</HighLightedText>
        </h1>
        <p className="text-2xl font-light">
          Choose your favorite and cook it is easy and fun!
        </p>
        <CTAButton className="place-self-start">
          Share Your Favorite Recipe
        </CTAButton>
      </header>

      <MealGrid className="px-16" meals={meals} />
    </>
  );
}
