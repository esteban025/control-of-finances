import React, { useEffect, useState } from "react";

const Sun = () => (
  <svg  
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"  
    viewBox="0 0 24 24"  
    fill="currentColor"  
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"/>
    <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" />
    <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
    <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
    <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
    <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" />
    <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
    <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
    <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /></svg>
)
const Moon = () => (
  <svg  
  className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"  
    fill="currentColor"  
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
  </svg>
)

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window !== "undefined" && window.localStorage) {

    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored as Theme;
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return "dark"
    
  }
  return "light";
}

export const ToggleTheme:React.FC = () => {

  const [theme, setTheme] = useState<Theme>(getPreferredTheme());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if(!localStorage.getItem("theme")) {
        setTheme(media.matches ? "dark" : "light");
      }
    }
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <button
    className="size-6 cursor-pointer p-0.5 box-content"
    onClick={toggleTheme}
    >
      {
        theme === "light" ? <Moon /> : <Sun />
      }
    </button>
  )
}
