import { fetchAllCategories } from "@/actions/action";
import Link from "next/link";
import path from "path";
import React from "react";

export default async function CategoriesPage() {
  const categories = await fetchAllCategories();

  return (
    <section>
      <div className="wrapper">
        <h1>Categories</h1>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex self-end mb-10">
            <Link href={"/dashboard/categories/add-category"}>
              Add a Category
            </Link>
          </div>
          {categories ? (
            categories.map((category) => {
              return <p key={category.id}>{category.name}</p>;
            })
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <p>No categories added.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
