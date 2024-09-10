import Image from "next/image";
import Link from "next/link";
import HeaderBackground from "./header-background";

import Logo from "@/assets/logo.png";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className='mx-20 my-8 flex justify-between items-center'>
        <Link href='/' className='flex items-center gap-4'>
          <Image
            src={Logo}
            width={80}
            height={80}
            alt='Image of a tasty food which is logo of this website'
          />
          <h1 className='text-4xl font-bold'>Foodies</h1>
        </Link>

        <nav className='flex gap-16 text-xl mr-32'>
          <Link
            href='/meals'
            className='tracking-wide font-bold hover:text-orange-300 hover:[text-shadow:4px_4px_10px_rgba(255,165,0,0.8)]'
          >
            Browse Meals
          </Link>
          <Link
            href='/community'
            className='tracking-wide font-bold hover:text-orange-300 hover:[text-shadow:4px_4px_10px_rgba(255,165,0,0.8)]'
          >
            Foodies Community
          </Link>
        </nav>
      </header>
    </>
  );
}
