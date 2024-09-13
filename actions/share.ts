"use server";

import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "next/navigation";
import { UTApi } from "uploadthing/server";

import { createMeal } from "@/db/queries/meals";
import { UploadFileResult } from "uploadthing/types";
import { revalidatePath } from "next/cache";

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

  // Check if the file size is under 4MB
  if (image.size > 4_000_000) {
    return {
      message: "Image size exceeds the maximum limit of 4MB",
    };
  }

  // prepare the name for the image and use .webp format
  const imageName = uuidv4();

  // convert and downscale the image using sharp
  const buffer = await image.arrayBuffer();
  let optimizedImageBuffer: Buffer;

  try {
    // downscale image and convert to .webp format
    optimizedImageBuffer = await sharp(Buffer.from(buffer))
      .resize({ width: 800 })
      .webp({ quality: 80 })
      .toBuffer();
  } catch (error) {
    return {
      message:
        "Please upload a valid image in valid format like .jpg, .jpeg, .png, webp, etc.",
    };
  }

  const file = new File([optimizedImageBuffer], `${imageName}.webp`, {
    type: "image/webp",
  });

  // upload the image to the file storage
  const utapi = new UTApi();
  let uploadedFile: UploadFileResult;

  try {
    uploadedFile = await utapi.uploadFiles(file);

    // check if the file is uploaded successfully
    if (!uploadedFile.data) throw new Error();
  } catch (error) {
    return {
      message: "Failed to upload the image, please try again later",
    };
  }

  const imageUrl = uploadedFile.data.url;

  // save meal in db
  createMeal({
    title,
    slug: title.toLowerCase().replace(/ /g, "-"), // Handle spaces correctly
    image: imageUrl,
    summary: summery,
    instructions,
    creator: name,
    creator_email: email,
    created_at: new Date().toISOString(),
  });

  revalidatePath("/meals");
  redirect("/meals");
}
