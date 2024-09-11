"use client";
import Image from "next/image";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import { useEffect, useState } from "react";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

interface ImageSlideShowProps {
  className?: string;
}

export default function ImageSlideShow({ className }: ImageSlideShowProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {images.map((image, index) => (
        <Image
          key={index}
          className={`absolute left-0 top-0 h-[110%] w-[110%] translate-x-4 rotate-12 scale-110 object-cover opacity-0 transition-all duration-1000 ${
            activeImageIndex === index
              ? "z-20 !translate-x-0 !rotate-0 scale-100 opacity-100"
              : ""
          }`}
          src={image.image}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
