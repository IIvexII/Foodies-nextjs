"use server";

import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "next/navigation";

import { createMeal } from "@/db/queries/meals";

export async function shareMeal(prevFormData: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const title = formData.get("title") as string;
  const summery = formData.get("summery") as string;
  const instructions = formData.get("instructions") as string;
  const image = formData.get("image") as File;

  // validate the form data if there is any missing data
  if (!name || !email || !title || !summery || !instructions || !image) {
    return {
      message: "Please fill all the fields",
    };
  }

  // prepare the name for the image and use .webp format
  const imageName = uuidv4();
  const imagePath = `public/images/${imageName}.webp`;

  // convert and downscale the image using sharp
  const buffer = await image.arrayBuffer();

  try {
    // downscale image and convert to .webp format
    await sharp(Buffer.from(buffer))
      .resize({ width: 800 })
      .webp({ quality: 80 })
      .toFile(imagePath);
  } catch (error) {
    return {
      message:
        "Please upload a valid image in valid format like .jpg, .jpeg, .png, webp, etc.",
    };
  }

  // save meal in db
  createMeal({
    title,
    slug: title.toLowerCase().replace(/ /g, "-"), // Handle spaces correctly
    image: `/images/${imageName}.webp`,
    summary: summery,
    instructions,
    creator: name,
    creator_email: email,
    created_at: new Date().toISOString(),
  });

  redirect("/meals");
}
