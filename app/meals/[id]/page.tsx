import Image from "next/image";
import { getMeal } from "@/db/queries/meals";
import HighLightedText from "@/components/highlighted-text";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface MealPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: MealPageProps): Promise<Metadata> {
  const id = params.id;
  const meal = await getMeal(id);

  if (!meal) {
    notFound();
  }

  return {
    title: `${meal.title} | Foodies`,
    description: meal.summary,
    openGraph: {
      title: `${meal.title} | Foodies`,
      description: meal.summary,
      images: [meal.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${meal.title} | Foodies`,
      description: meal.summary,
      images: meal.image,
    },
  };
}

export default async function MealPage({ params }: MealPageProps) {
  const meal = await getMeal(params.id);

  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <div className="mt-20 md:mt-12 px-10">
      <div className="md:flex md:flex-row lg:grid lg:grid-flow-row lg:grid-cols-7 gap-8 lg:gap-16">
        <Image
          src={meal.image || ""}
          alt={meal.summary || ""}
          fill
          className="!relative md:!h-[300px] md:!w-[500px] lg:col-span-2 lg:col-start-2 rounded-xl object-cover shadow-md shadow-black"
        />
        <div className="mt-12 md:mt-0 col-span-3 flex flex-col gap-4 lg:gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">{meal.title}</h1>
          <p className="text-xl">
            by <HighLightedText>{meal.creator}</HighLightedText>
          </p>
          <p className="-mt-2 text-xl text-gray-300">{meal.summary}</p>
        </div>
      </div>
      <div className="mt-12 md:mt-20 lg:grid lg:grid-flow-row lg:grid-cols-7">
        <p
          className="col-span-5 col-start-2 rounded-lg border border-gray-400 bg-white/55 p-6 text-lg text-black"
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </div>
    </div>
  );
}
