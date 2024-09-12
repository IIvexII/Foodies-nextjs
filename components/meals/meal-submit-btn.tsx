"use client";

import { useFormStatus } from "react-dom";
import { CTAButton } from "../cta-button"

export default function MealSubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <CTAButton className="self-end" type="submit"
            disabled={pending}
        >Share Meal</CTAButton>
    );
}