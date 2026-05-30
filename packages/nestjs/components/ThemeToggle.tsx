"use client";

import { useEffect, useState } from "react";
import { palette } from "data";

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

  // Preview the theme you'll get after clicking:
  // in dark mode → a light/white button with a sun; in light mode → a dark button with a moon.
  const preview = isDark ? palette.light : palette.dark;

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar tema"
      className="fixed top-4 right-4 z-50 m-0 p-2 w-12 h-12 rounded-pill border border-solid text-xl backdrop-blur"
      style={{
        backgroundColor: preview.bg,
        color: preview.text,
        borderColor: preview.border,
      }}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
