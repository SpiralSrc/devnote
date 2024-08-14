import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      {children}
    </div>
  );
}
