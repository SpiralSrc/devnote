import React from "react";
import SubmitButton from "../ui/SubmitButton";
import { AddCategory } from "@/actions/action";

const CategoryForm = () => {
  return (
    <form action={AddCategory}>
      <input type="text" name="name" placeholder="Category name..." />
      <SubmitButton>Add Category</SubmitButton>
    </form>
  );
};

export default CategoryForm;
