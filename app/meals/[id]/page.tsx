import Image from "next/image";
import { getMeal } from "@/db/queries/meals";
import HighLightedText from "@/components/highlighted-text";
import { notFound } from "next/navigation";

interface MealPageProps {
  params: {
    id: string;
  };
}
export default async function MealPage({ params }: MealPageProps) {
  const meal = await getMeal(params.id);

  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <div className="mt-12">
      <div className="grid grid-flow-row grid-cols-7 gap-16">
        <Image
          src={meal.image || ""}
          alt={meal.summary || ""}
          fill
          className="!relative col-span-2 col-start-2 rounded-xl object-cover shadow-md shadow-black"
        />
        <div className="col-span-3 flex flex-col gap-6">
          <h1 className="text-6xl font-bold">{meal.title}</h1>
          <p className="text-xl">
            by <HighLightedText>{meal.creator}</HighLightedText>
          </p>
          <p className="-mt-2 text-xl text-gray-300">{meal.summary}</p>
        </div>
      </div>
      <div className="mt-20 grid grid-flow-row grid-cols-7">
        <p
          className="col-span-5 col-start-2 rounded-lg border border-gray-400 bg-white/55 p-6 text-lg text-black"
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </div>
    </div>
  );
}
