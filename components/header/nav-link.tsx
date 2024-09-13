"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href?: string;
  className?: string;
  children: ReactNode;
}

export default function NavLink({ href, className, children }: NavLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={href || ""}
      className={`font-semibold tracking-wide px-3 py-3 md:p-0 hover:bg-black/15 md:hover:bg-transparent md:hover:text-orange-300 md:hover:[text-shadow:2px_2px_6px_rgba(255,165,0,0.8)] ${className} ${path === href ? "bg-black/15 md:bg-transparent md:text-orange-300 md:[text-shadow:2px_2px_6px_rgba(255,165,0,0.8)]" : ""}`}
    >
      {children}
    </Link>
  );
}
