import ImageSlideShow from "@/components/image/image-slide-show";
import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import HighLightedText from "./highlighted-text";

export default function Hero() {
  return (
    <div className="mt-16 flex h-[68vh] select-none flex-row justify-between gap-16 px-20">
      <ImageSlideShow className="h-[360px] w-[1020px]" />
      <div className="mt-8 flex flex-col justify-start gap-6">
        <HighLightedText className="text-5xl font-semibold uppercase">
          Nextlevel food for nextlevel foodies
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
