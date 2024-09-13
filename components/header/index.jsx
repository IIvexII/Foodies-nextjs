import Image from "next/image";
import Link from "next/link";
import HeaderBackground from "./header-background";

import Logo from "@/assets/logo.png";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className="mx-6 my-8 flex flex-col items-center justify-between gap-6 md:mx-20 md:flex-row">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src={Logo}
            fill
            alt="Image of a tasty food which is logo of this website"
            priority
            className="!relative !h-14 !w-14"
          />
          <h1 className="text-3xl font-bold lg:text-4xl">Foodies</h1>
        </Link>

        <nav className="mr-0 flex overflow-clip rounded-full bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-sm md:gap-8 md:overflow-hidden md:bg-none md:text-lg lg:mr-32 lg:gap-12 lg:text-xl">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/meals">Browse Meals</NavLink>
          <NavLink href="/community">Foodies Community</NavLink>
        </nav>
      </header>
    </>
  );
}
