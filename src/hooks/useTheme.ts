import { useEffect, useState } from "react";
import type { Theme } from "@/types/types";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Recuperar tema guardado o usar preferencia del sistema
    const saved = localStorage.getItem("theme");
    if (saved) return saved as Theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
