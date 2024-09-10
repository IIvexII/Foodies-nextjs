import ImageSlideShow from "@/components/image/image-slide-show";
import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import HighLightedText from "./highlighted-text";

export default function Hero() {
  return (
    <div className="mt-16 flex h-[68vh] select-none flex-row justify-between gap-16 px-20">
      <ImageSlideShow className="h-[360px] w-[1020px]" />
      <div className="mt-8 flex flex-col justify-start gap-6">
        {/* <h1 className="inline-block bg-gradient-to-br from-orange-600 to-orange-400 bg-clip-text text-5xl font-semibold uppercase tracking-wide text-transparent">
          Nextlevel food for next level foodies
        </h1> */}
        <HighLightedText className="text-5xl font-semibold">
          Nextlevel food for next level foodies
        </HighLightedText>
        <p className="text-3xl font-extralight">
          Taset & share from all over the world
        </p>
        <div className="mt-8 flex gap-8">
          <Link
            href="/community"
            className="transition-all duration-500 hover:scale-105"
          >
            <HighLightedText className="text-2xl font-light">
              Join the Community
            </HighLightedText>
          </Link>
          <CTAButton href="/meals">Explore Meal</CTAButton>
        </div>
      </div>
    </div>
  );
}
