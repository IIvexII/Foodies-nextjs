import { Suspense } from "react";

import { CTAButton } from "@/components/cta-button";
import HighLightedText from "@/components/highlighted-text";
import MealGrid from "@/components/image/meal-grid";
import Loader from "@/components/loeader";

import { getMeals } from "@/db/queries/meals";

async function ShowMeals() {
  const meals = await getMeals();

  return <MealGrid className="px-16" meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className="mt-16 flex flex-col gap-6 px-16">
        <h1 className="text-6xl font-semibold">
          Delicious meeals, created <HighLightedText>by you</HighLightedText>
        </h1>
        <p className="text-2xl font-light">
          Choose your favorite and cook it is easy and fun!
        </p>
        <CTAButton className="place-self-start" href="/meals/share">
          Share Your Favorite Recipe
        </CTAButton>
      </header>
      <Suspense fallback={<Loader />}>
        <ShowMeals />
      </Suspense>
    </>
  );
}
