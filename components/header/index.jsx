import Image from "next/image";
import Link from "next/link";
import HeaderBackground from "./header-background";

import Logo from "@/assets/logo.png";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className="mx-20 my-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src={Logo}
            width={80}
            height={80}
            alt="Image of a tasty food which is logo of this website"
            priority
          />
          <h1 className="text-4xl font-bold">Foodies</h1>
        </Link>

        <nav className="mr-32 flex gap-16 text-xl">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/meals">Browse Meals</NavLink>
          <NavLink href="/community">Foodies Community</NavLink>
        </nav>
      </header>
    </>
  );
}
