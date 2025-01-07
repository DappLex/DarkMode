import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return <div className="bg-gray-400 px-20 py-3 flex items-center dark:bg-dark justify-between">
    <h1 className="text-2xl font-bold">
        <span className=" dark:text-white">Dark</span>
        <span className="text-blue-600">Mode</span>
    </h1>

    <div className="font-bold text-sm flex space-x-3 items-center dark:text-white">
        <p>Home</p>
        <p>About</p>
        <p>Pricing</p>
        <p>Contact</p>
        <p>Shop</p>
    </div>

    <h1 className="font-bold"><ThemeToggle/></h1>
  </div>;
}
