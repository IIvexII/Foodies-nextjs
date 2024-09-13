"use client";

import { useFormState } from "react-dom";

import { shareMeal } from "@/actions/share";
import HighLightedText from "@/components/highlighted-text";
import ImagePicker from "@/components/meals/image-picker";
import MealSubmitBtn from "@/components/meals/meal-submit-btn";
import TextInput from "@/components/meals/text-input";


export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: "" });

  return <form className="max-w-screen-md mx-auto flex flex-col gap-4 md:gap-8 my-16 px-10" action={formAction}>
    <header className="mb-12">
      <h1 className="text-6xl font-semibold mb-2">Share your <HighLightedText>favorite recipe</HighLightedText></h1>
      <p className="text-2xl font-light">The world is waiting for your delicious recipe!</p>
    </header>
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <TextInput label="Your name" name="name" />
      <TextInput label="Email" name="email" type="email" />
    </div>
    <TextInput label="Title" name="title" />
    <TextInput label="Short Description" name="summery" />
    <TextInput label="Instructions" name="instructions" type="textarea" />

    {state.message && <p className="text-red-500">{state.message}</p>}
    <div className="flex flex-row justify-between">
      <ImagePicker />

      <MealSubmitBtn />
    </div>
  </form>;
}
