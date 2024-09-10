import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
}
export function CTAButton({ children, href, className }: CTAButtonProps) {
  return (
    <Link
      href={href || ""}
      className={`rounded-md bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 px-4 py-2 text-xl font-bold transition-all duration-500 hover:scale-105 hover:bg-gradient-to-bl ${className}`}
    >
      {children}
    </Link>
  );
}
