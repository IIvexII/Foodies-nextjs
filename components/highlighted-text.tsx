import { ReactNode } from "react";

interface HighLightedTextProps {
  children?: ReactNode;
  className?: string;
}

export default function HighLightedText({
  children,
  className,
}: HighLightedTextProps) {
  return (
    <span
      className={`inline-block bg-gradient-to-br from-orange-600 to-orange-400 bg-clip-text pb-4 text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
