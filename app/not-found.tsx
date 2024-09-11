"use client";

import HighLightedText from "@/components/highlighted-text";

export default function NotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <HighLightedText className="text-8xl font-bold uppercase">
        Not Found
      </HighLightedText>
      <p className="mt-6 text-2xl font-light text-orange-100">
        Unfortunatly, we could not find the requested page or resource.
      </p>
    </div>
  );
}
