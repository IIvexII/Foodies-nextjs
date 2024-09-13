import Hero from "@/components/hero";
import HighLightedText from "@/components/highlighted-text";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="mx-auto flex max-w-screen-md flex-col gap-16 text-justify md:text-center px-10">
        <section className="flex flex-col gap-8">
          <HighLightedText className="text-5xl font-semibold">
            How it works
          </HighLightedText>
          <p className="max-sm:-mt-4 text-2xl leading-normal text-gray-300">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-2xl leading-normal text-gray-300">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col gap-0 md:gap-8">
          <HighLightedText className="text-5xl font-semibold">
            Why NextLevel Food?
          </HighLightedText>
          <p className="text-2xl leading-normal text-gray-300">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-2xl leading-normal text-gray-300">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
