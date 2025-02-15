"use client";

import Colors from "@/constants/theme/Colors";
import { useThemeContext } from "@/contexts/ThemeContext";
import { store } from "@/store/store";
import React, { useEffect } from "react";
import { Provider } from "react-redux";

const Main = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeContext();

  useEffect(() => {
    const root = document.documentElement;
    const colors = Colors[theme];
    root.style.setProperty("--background-color", colors.background);
    root.style.setProperty("--popupbackground-color", colors.popUpBackground);
    root.style.setProperty("--text-color", colors.text);
    root.style.setProperty("--textGray-color", colors.textGray);
    root.style.setProperty("--active-color", colors.active);
    root.style.setProperty("--success-color", colors.success);
    root.style.setProperty("--warnning-color", colors.warnning);
    root.style.setProperty("--danger-color", colors.danger);
    root.setAttribute("data-theme", theme); // Set the data-theme attribute
  }, [theme]);

  return <div> <Provider store={store}>{children}</Provider></div>;
};

export default Main;
