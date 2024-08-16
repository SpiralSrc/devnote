"use server";

import { prisma } from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

// Create Category
export async function AddCategory(formData: FormData): Promise<void> {
  const name = formData.get("name") as string;

  try {
    if (!name) {
      throw new NextResponse("Category name is required!", { status: 500 });
    }

    await prisma.category.create({
      data: {
        name,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/categories/add-categories");
  redirect("/dashboard/categories");
}

// Create Note
export async function CreateNote(formData: FormData) {
  const title = formData.get("title") as string;
  const bannerUrl = formData.get("bannerUrl") as string;
  const content = formData.get("content") as string;
  const catName = formData.get("catName") as string;

  try {
    if (!title || !bannerUrl || !content || !catName) {
      throw new NextResponse("All fields are required!", { status: 500 });
    }

    await prisma.note.create({
      data: {
        title,
        bannerUrl,
        content,
        catName,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

// ---------- Fetch

// Fetch categories
export async function fetchAllCategories() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: "asc" },
    });

    return categories;
  } catch (error) {
    console.log("Error in fetching categories", error);
  }
}
