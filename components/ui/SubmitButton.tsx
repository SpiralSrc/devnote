"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="py-2 px-3">
      {pending ? "Submitting..." : `${children}`}
    </button>
  );
};

export default SubmitButton;
