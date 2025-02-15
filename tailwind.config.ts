import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        walone_bold: ["var(--font-z06-walone-bold)"],
        walone_regular: ["var(--font-z06-walone-regular)"],
        walone_thin: ["var(--font-z06-walone-thin)"],
        archivo: ["var(--font-archivo)"],
      },
      colors: {
        'status-todo': 'rgb(226 232 240)',
        'status-inProgress': 'rgb(191 219 254)',
        'status-done': 'rgb(187 247 208)',
        textColor: "var(--text-color)",
        textGrayColor: "var(--textGray-color)",
        backgroundColor: "var(--background-color)",
        popupBackgroundColor: "var(--popupbackground-color)",
        iconColor: "var(--icon-color)",
        activeColor: "var(--active-color)",
        successColor: "var(--success-color)",
        warnningColor: "var(--warnning-color)",
        dangerColor: "var(--danger-color)",
      },
      animation: {
        slowSpin: "spin 4s linear infinite",
        slowlySpin: "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
