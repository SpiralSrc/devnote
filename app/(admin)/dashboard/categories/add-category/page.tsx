import CategoryForm from "@/components/dashboard/CategoryForm";
import React from "react";

export default function AddCategoryPage() {
  return (
    <section>
      <div className="wrapper">
        <div className="w-full flex flex-col">
          <h1 className="text-center font-sacramento text-4xl">
            Add a category
          </h1>
          <CategoryForm />
        </div>
      </div>
    </section>
  );
}
