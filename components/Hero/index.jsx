import ImageSlideShow from "@/components/image/image-slide-show";
import Link from "next/link";

export default function Hero() {
  return (
    <div className='mt-16 flex flex-row justify-between gap-16 px-20'>
      <ImageSlideShow className='w-[1020px] h-[360px]' />
      <div className='flex flex-col justify-center gap-6'>
        <h1 className='text-5xl tracking-wide text-transparent bg-clip-text font-semibold uppercase bg-gradient-to-br from-orange-600 to-orange-400 inline-block'>
          Nextlevel food for next level foodies
        </h1>
        <p className='text-3xl font-extralight'>Taset & share from all over the world</p>
        <div className='flex gap-8 mt-8'>
          <Link href='/community' className='text-2xl font-light text-orange-400'>
            Join the Community
          </Link>
          <Link
            href='/meals'
            className='bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 px-4 py-2 rounded-md text-xl font-bold hover:bg-gradient-to-bl hover:scale-105 transition-all duration-500'
          >
            Explore Meal
          </Link>
        </div>
      </div>
    </div>
  );
}
