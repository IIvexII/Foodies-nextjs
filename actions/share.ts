"use server";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

import { createMeal } from "@/db/queries/meals";
import { redirect } from "next/navigation";

export async function shareMeal(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const title = formData.get("title") as string;
  const summery = formData.get("summery") as string;
  const instructions = formData.get("instructions") as string;
  const image = formData.get("image") as File;

  // prepare the name and path for the image
  const extension = image.name.split(".").pop();
  const imageName = `${uuidv4()}-${Buffer.from(image.name).toString("hex")}`;
  const imagePath = `public/images/${imageName}.${extension}`;

  // save image in public/images
  const buffer = await image.arrayBuffer();
  fs.writeFileSync(imagePath, Buffer.from(buffer));

  // save meal in db
  createMeal({
    title,
    slug: title.toLowerCase().replace(" ", "-"),
    image: `/images/${imageName}.${extension}`,
    summary: summery,
    instructions,
    creator: name,
    creator_email: email,
  });

  redirect("/meals");
}
