import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="mx-auto flex max-w-screen-md flex-col gap-16 text-center">
        <section className="flex flex-col gap-8">
          <h2 className="text-5xl text-gray-200">How it works</h2>
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

        <section className="flex flex-col gap-8">
          <h2 className="text-5xl text-gray-200">Why NextLevel Food?</h2>
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
