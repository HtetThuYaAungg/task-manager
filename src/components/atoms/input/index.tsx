"use client";


import styles from "./input.module.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Props from "./type";

function Input({
  id,
  name,
  type,
  placeholder,
  className,
  value,
  defaultValue,
  disable,
  onChange,
  min,
  rest,
}: Props) {


  const [showPassword, setShowPassword] = useState(false);

  const disableUi = disable
    ? " bg-gray-100 opacity-70 cursor-not-allowed"
    : "bg-gray-50";

  return (
    <>
      {type === "password" ? (
        <div className="relative flex w-full">
          <input
            id={id}
            name={name}
            type={showPassword ? "text" : "password"}
            value={value}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
            disabled={disable}
            className={`${disableUi} ${styles.container} ${className}`}
            {...rest}
          />
          <span
            className="flex justify-around items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <p className="absolute mr-10 ">
              {" "}
              {showPassword ? (
                <FaEye className="text-primaryColor" />
              ) : (
                <FaEyeSlash className="text-fourthColor" />
              )}
            </p>
          </span>

          {/* <div
          className="absolute top-3/5 right- transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          
        </div> */}
        </div>
      ) : (
        <>
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
            disabled={disable}
            min={min}
            className={`${disableUi} ${styles.container} ${className}`}
            {...rest}
          />
        </>
      )}
    </>
  );
}

export default Input;