"use client";

import React from "react";
import SubmitButton from "../ui/SubmitButton";

const AddNoteForm = () => {
  return (
    <form>
      <input type="text" name="title" placeholder="Title..." />
      <input
        type="url"
        pattern="https://.*"
        name="bannerUrl"
        placeholder="Image url..."
      />
      <select name="category">
        <option value="">Choose a category...</option>
        <option value="Coding">Coding</option>
      </select>
      <textarea name="content" placeholder="Start writing..." />
      <SubmitButton>Add Note</SubmitButton>
    </form>
  );
};

export default AddNoteForm;
