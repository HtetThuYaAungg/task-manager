"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import { Theme } from "@/constants/type";
import { getSystemTheme } from "@/helpers/theme";
import { getFromLocalStorage, saveToLocalStorage } from "@/helpers/storage";


type ThemeContextType = {
  theme: Theme;
  isSystemTheme: boolean;
  toggleTheme: (newTheme: Theme) => void;
  applySystemTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const colorScheme = getSystemTheme();
  const [theme, setTheme] = useState<Theme>(colorScheme || "light");
  const [themeLoading, setThemeLoading] = useState(true);
  const [isSystemTheme, setIsSystemTheme] = useState<boolean>(false);

  // Load theme preference on app start
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await getFromLocalStorage("theme");
        const savedSystemPreference = await getFromLocalStorage(
          "systemPreference"
        );

        if (savedTheme) {
          setTheme(savedTheme as Theme);
        }

        // Check if system preference was enabled previously
        if (savedSystemPreference === "true") {
          setIsSystemTheme(true);
          setTheme(colorScheme as Theme);
        }
      } catch (error) {
        console.error("Error loading theme:", error);
      } finally {
        setThemeLoading(false);
      }
    };

    loadTheme();
  }, [colorScheme]);

  useEffect(() => {
    if (isSystemTheme) {
      setTheme(colorScheme as Theme);
      saveToLocalStorage("theme", colorScheme as Theme);
    }
  }, [colorScheme, isSystemTheme]);

  // Toggle to a specific theme
  const toggleTheme = useCallback(
    async (newTheme: Theme) => {
      setIsSystemTheme(false);
      setTheme(newTheme);
      await saveToLocalStorage("theme", newTheme);
      await saveToLocalStorage("systemPreference", "false");
    },
    []
  );

  // Enable system theme
  const applySystemTheme = useCallback(async () => {
    setIsSystemTheme(true);
    setTheme(colorScheme as Theme);
    await saveToLocalStorage("theme", colorScheme as Theme);
    await saveToLocalStorage("systemPreference", "true");
  }, [colorScheme]);

  const value = useMemo(
    () => ({
      theme,
      isSystemTheme,
      toggleTheme,
      applySystemTheme,
    }),
    [theme, isSystemTheme, toggleTheme, applySystemTheme] 
  );

  return (
    <ThemeContext.Provider value={value}>
      {themeLoading ? <div className="loading"><p  className="loading_text">loading</p></div> :  children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
