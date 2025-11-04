"use server";

import z from "zod";
import { db } from "../../db";
import { gameTable } from "../../db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const EventInsertSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Min length must be more than 3")
    .max(250, "Title is too long, must be under 250"),
  description: z
    .string()
    .trim()
    .min(3, "Min length must be more than 3")
    .max(250, "Too long, must be under 250"),
});

export async function createCategory(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");

  const newCategory = EventInsertSchema.parse({ title, description });
  await db.insert(gameTable).values(newCategory);
  revalidatePath("/playground/games");
  redirect("/playground/games");
}
