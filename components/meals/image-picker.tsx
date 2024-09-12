"use client";

import { useRef } from "react";

export default function ImagePicker() {
    const ref = useRef<HTMLInputElement>(null);

    const pickImageHandler = () => {
        ref?.current?.click();
    }
    return <div>
        <input ref={ref} type="file" accept="image/jpeg, image/jpg, image/png" className="hidden" />
        <button type="button" onClick={pickImageHandler} className="bg-slate-700 px-4 py-2 rounded-lg">Pick an image</button>
    </div>
}