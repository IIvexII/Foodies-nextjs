import { Suspense } from "react";
import { Metadata } from "next";

import { CTAButton } from "@/components/cta-button";
import HighLightedText from "@/components/highlighted-text";
import MealGrid from "@/components/image/meal-grid";
import Loader from "@/components/loeader";
import { getMeals } from "@/db/queries/meals";

// make this page dynamic
export const revalidate = 0;

// SEO metadata
export const metadata: Metadata = {
  title: 'Browse Meals - Foodies',
  description: 'Explore a wide variety of recipes shared by our community on Foodies.',
  openGraph: {
    title: 'All Meals - Foodies',
    description: 'Explore a wide variety of recipes shared by our community on Foodies.',
    images: ['/images/pizza.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Meals - Foodies',
    description: 'Explore a wide variety of recipes shared by our community on Foodies.',
    images: ['/images/pizza.jpg'],
  },
};


async function ShowMeals() {
  const meals = await getMeals();

  return <MealGrid className="px-10 md:px-16 " meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className="mt-16 flex flex-col gap-0 md:gap-6 px-10 md:px-16">
        <h1 className="text-4xl md:text-6xl font-semibold">
          Delicious meeals, created <HighLightedText>by you</HighLightedText>
        </h1>
        <p className="text-xl md:text-2xl font-light">
          Choose your favorite and cook it is easy and fun!
        </p>
        <CTAButton className="place-self-start mt-8 md:mt-0" href="/meals/share">
          Share Your Favorite Recipe
        </CTAButton>
      </header>
      <Suspense fallback={<Loader />}>
        <ShowMeals />
      </Suspense>
    </>
  );
}
