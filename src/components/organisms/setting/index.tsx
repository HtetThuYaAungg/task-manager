"use client";

import { useThemeContext } from "@/contexts/ThemeContext";
import React from "react";
import style from "./styles.module.css";
import Icon, { IconState } from "@/components/atoms/icon";

const Setting = () => {
  const { theme, isSystemTheme, toggleTheme, applySystemTheme } =
    useThemeContext();


  return (

    <div className="relative min-w-[300px] w-[450px]" >

      <h2 className="mb-1 w-full  bg-popupBackgroundColor rounded-t-[10px] px-7 py-4 shadow-md text-textGrayColor font-walone_bold">
        App settings
      </h2>
      <div className="w-full  mx-auto mb-1 bg-popupBackgroundColor px-7 py-4 shadow-md rounded-b-[10px]">
        {/* Appearance Section */}
        <div className="mb-5 ">
          <h3 className="mb-3 text-textGrayColor font-walone_regular">
            Appearance
          </h3>
          <div className="flex justify-start gap-2">
            {/* Light Theme */}
            <div
              className={`${style.theme_option} bg-[#e4e6eb] ${!isSystemTheme && theme === "light"
                ? "border-activeColor"
                : "border-[#b0b3b8]"
                }`}
              onClick={() => toggleTheme("light")}
            >
              <div className={style.option_container}>
                <div
                  className={`${style.option_sub_container} bg-white border-[#b0b3b8]`}
                >
                  <p className="text-black font-walone_bold">Aa</p>
                </div>
                <Icon name={IconState.CircleCheck}
                  style={`text-activeColor ${!isSystemTheme && theme === "light"
                    ? " flex absolute bottom-2 right-2 transition-none"
                    : "flex-none relative"
                    }`}
                  size={20}
                />
              </div>
              <p className="text-sm text-textGrayColor pt-2 font-walone_bold ">
                Light
              </p>
            </div>

            {/* Dark Theme */}
            <div
              className={`${style.theme_option} bg-[#3c3c3c] ${!isSystemTheme && theme === "dark"
                ? "border-activeColor"
                : "border-[#b0b3b8]"
                }`}
              onClick={() => toggleTheme("dark")}
            >
              <div className={style.option_container}>
                <div
                  className={`${style.option_sub_container} bg-[#1f1f1f] border-[#b0b3b8]`}
                >
                  <p className="text-white font-walone_bold">Aa</p>
                </div>
                <Icon name={IconState.CircleCheck}
                  style={`text-activeColor ${!isSystemTheme && theme === "dark"
                    ? " flex absolute bottom-2 right-2 transition-none"
                    : "flex-none relative"
                    }`}
                  size={20}
                />
              </div>
              <p className="text-sm font-walone_bold text-textGrayColor pt-2 ">
                Dark
              </p>
            </div>

            {/* System Theme */}
            <div
              className={`${style.theme_option} ${isSystemTheme ? "border-activeColor" : "border-[#b0b3b8]"
                }`}
              onClick={() => applySystemTheme()}
            >
              <div
                className={`${style.option_container} grid grid-cols-2`}
              >
                <div className="grid-cols-1 overflow-hidden bg-[#3c3c3c]">
                  <div className="w-full h-full text-start cursor-pointer border-2 border-solid rounded-[10px] pt-[10px] pb-[10px] pl-[10px] relative mt-5 ml-5 bg-[#1f1f1f] border-[#b0b3b8]">
                    <p className="text-white font-walone_bold">Aa</p>
                  </div>
                </div>
                <div className="grid-cols-1 overflow-hidden bg-[#e4e6eb] ">
                  <div className="w-full h-full text-start cursor-pointer border-2 border-solid rounded-[10px] pt-[10px] pb-[10px] pl-[10px] relative mt-5 ml-5 bg-white border-[#b0b3b8]">
                    <p className="text-black font-walone_bold">Aa</p>
                  </div>
                  <Icon name={IconState.CircleCheck}
                    style={`text-activeColor ${isSystemTheme
                      ? " flex absolute bottom-2 right-2 transition-none"
                      : "flex-none relative"
                      }`}
                    size={20}
                  />
                </div>
              </div>
              <p className="text-sm font-walone_bold text-textGrayColor pt-2 ">
                System
              </p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Setting;
