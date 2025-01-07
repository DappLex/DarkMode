import React from "react";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="dark:text-white">
      <Navbar />
      <div className="w-full h-full flex justify-center items-center mt-32">
        <h1 className="text-6xl text-gray-900 font-bold dark:text-white text-center">
          AISIX6 Light and DarkMode
        </h1>
      </div>
    </div>
  );
}
