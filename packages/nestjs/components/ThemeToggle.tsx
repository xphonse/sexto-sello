"use client";

import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      !saved && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = saved === "dark" || prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar tema"
      className={`fixed top-4 right-4 z-50 m-0 p-2 w-12 h-12 rounded-full border border-solid border-slate-400 text-xl backdrop-blur ${
        isDark ? "bg-white/80" : "bg-slate-800"
      }`}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
