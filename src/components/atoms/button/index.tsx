import React from "react";

interface ButtonProps {
  onClick?: () => void;
  label: string;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  variant?: "primary" | "success" | "danger" | "warning"| "link";
}

const Button = ({
  onClick,
  label,
  disabled = false,
  className = "",
  type = "button",
  size = "medium",
  variant = "primary",
}: ButtonProps) => {
  const sizeClass = {
    small: "px-3 py-2 text-xs",
    medium: "px-5 py-2 text-sm",
    large: "px-7 py-2 text-md",
  }[size];

  const variantClass = {
    primary: "bg-activeColor hover:bg-successColor",
    success: "bg-successColor hover:bg-green-700",
    danger: "bg-dangerColor hover:bg-red-800",
    warning: "bg-warnningColor hover:bg-purple-800",
    link: "bg-textGrayColor "
  }[variant];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`rounded-md border-none cursor-pointer text-white font-walone_regular ${sizeClass} ${variantClass} ${
        disabled ? "cursor-not-allowed opacity-60" : ""
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
