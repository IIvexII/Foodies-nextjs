"use client";

import HighLightedText from "@/components/highlighted-text";

export default function Error() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <HighLightedText className="text-8xl font-bold uppercase">
        An Error Occurred!
      </HighLightedText>
      <p className="mt-6 text-2xl font-light text-orange-100">
        Failed to fetch meal data. Please try again later.
      </p>
    </div>
  );
}
