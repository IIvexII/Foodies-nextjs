import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  type?: "submit" | "link";
  disabled?: boolean;
}
export function CTAButton({ children, href, className, type = "link", disabled }: CTAButtonProps) {

  if (type === "submit") {
    return (
      <button
        type="submit"
        className={`rounded-md bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 px-4 py-2 text-xl font-bold transition-all duration-500 hover:scale-105 hover:bg-gradient-to-bl ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link
        href={href || ""}
        className={`flex justify-center items-center rounded-md bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 px-4 py-2 text-base lg:text-xl  font-bold transition-all duration-500 hover:scale-105 hover:bg-gradient-to-bl ${className}`}
      >
        {children}
      </Link>
    );
  }

}
