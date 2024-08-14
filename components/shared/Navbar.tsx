import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-30 backdrop-blur-md bg-pink-500/10">
      <div className="wrapper flex flex-row justify-between items-center py-5 px-3">
        <span>Logo</span>
        <ul className="flex justify-center items-center gap-3">
          <li>Home</li>
          <li>Blogs</li>
        </ul>
        <ul className="flex justify-center items-center gap-3">
          <li>Github</li>
          <li>X</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
