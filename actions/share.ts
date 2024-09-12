"use server";

export async function shareMeal(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const title = formData.get("title") as string;
  const summery = formData.get("summery") as string;
  const instructions = formData.get("instructions") as string;
  const image = formData.get("image") as string;

  console.log(name, email, title, summery, instructions, image);
  // send the data to the server
}
