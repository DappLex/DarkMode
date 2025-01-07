'use client';

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export default function ThemeToggle() {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if( theme === 'dark' ) setDarkMode(true);
    }, [] );

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.getItem("theme", "dark");
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.getItem("theme", "light");
        }
    }, [darkMode] )

  return (
    <div className="relative w-14 h-7 flex items-center dark:bg-gray-900 bg-teal-50 cursor-pointer rounded-full p-1" onClick={ () => setDarkMode(!darkMode)}>
        <FaMoon className="text-white" size={14}/>
        <div className="aabsolute bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300" style={darkMode ? {left: "2px"} : {right: "2px"}}></div>
        <BsSunFill className="ml-auto text-yellow-400" size={14}/>
    </div>
  );
};
