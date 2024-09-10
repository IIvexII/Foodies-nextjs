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
      className={`font-semibold tracking-wide hover:text-orange-300 hover:[text-shadow:4px_4px_10px_rgba(255,165,0,0.8)] ${className} ${path === href ? "text-orange-300 [text-shadow:4px_4px_10px_rgba(255,165,0,0.8)]" : ""}`}
    >
      {children}
    </Link>
  );
}
