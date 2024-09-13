import ImageSlideShow from "@/components/image/image-slide-show";
import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import HighLightedText from "./highlighted-text";

export default function Hero() {
  return (
    <div className="mt-10 md:mb-16 lg:mb-0 max-sm:mb-20 flex lg:h-[68vh] select-none flex-col md:flex-row justify-between gap-2 md:gap-8 lg:gap-16 px-10 md:px-20">
      <ImageSlideShow className="h-[260px] w-full md:h-[280px] md:w-[600px] lg:h-[360px] lg:w-[1020px]" />
      <div className="mt-8 flex flex-col justify-start gap-- md:gap-6">
        <HighLightedText className="text-4xl md:text-3xl lg:text-5xl font-semibold uppercase">
          Nextlevel food for nextlevel foodies
        </HighLightedText>
        <p className="text-2xl lg:text-3xl font-extralight">
          Taset & share from all over the world
        </p>
        <div className="mt-8 flex max-sm:flex-row-reverse lg:gap-8 justify-between items-center">
          <Link
            href="/community"
            className="transition-all duration-500 hover:scale-105"
          >
            <HighLightedText className="text-xl lg:text-2xl  font-light">
              Join the Community
            </HighLightedText>
          </Link>
          <CTAButton href="/meals" >Explore Meal</CTAButton>
        </div>
      </div>
    </div>
  );
}
