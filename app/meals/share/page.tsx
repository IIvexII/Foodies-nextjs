import { shareMeal } from "@/actions/share";

import { CTAButton } from "@/components/cta-button";
import HighLightedText from "@/components/highlighted-text";
import ImagePicker from "@/components/meals/image-picker";
import TextInput from "@/components/meals/text-input";

export default function ShareMealPage() {


  return <form className="max-w-screen-md mx-auto flex flex-col gap-8 my-16" action={shareMeal}>
    <header className="mb-12">
      <h1 className="text-6xl font-semibold mb-2">Share your <HighLightedText>favorite recipe</HighLightedText></h1>
      <p className="text-2xl font-light">The world is waiting for your delicious recipe!</p>
    </header>
    <div className="flex flex-row gap-8">
      <TextInput label="Your name" name="name" />
      <TextInput label="Email" name="email" type="email" />
    </div>
    <TextInput label="Title" name="title" />
    <TextInput label="Short Description" name="summery" />
    <TextInput label="Instructions" name="instructions" type="textarea" />

    <div className="flex flex-row justify-between">
      <ImagePicker />

      <CTAButton className="self-end" type="submit" >Share Meal</CTAButton>
    </div>
  </form>;
}
