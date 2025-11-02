"use server";

import { db } from "../../db";
import { eventTable } from "../../db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createEvent(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  
  await db.insert(eventTable).values({ name, description });
  revalidatePath("/events");
  redirect("/events");
}