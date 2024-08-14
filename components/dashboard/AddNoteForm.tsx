import React from "react";

const AddNoteForm = () => {
  return (
    <form>
      <input type="text" name="title" placeholder="Title..." />
      <input type="hidden" name="bannerUrl" placeholder="Banner image" />
      <textarea name="content" placeholder="Start writing..." />
      <button>Submit</button>
    </form>
  );
};

export default AddNoteForm;
