import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Main from "./main";
import { ToastContainer } from "react-toastify";


// Use the Google Font (Archivo)
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const walone_bold = localFont({
  src: "../../public/fonts/Z06-Walone-Bold.ttf",
  display: "swap",
  variable: "--font-z06-walone-bold",
});

const walone_regular = localFont({
  src: "../../public/fonts/Z06-Walone-Regular.ttf",
  display: "swap",
  variable: "--font-z06-walone-regular",
});

const walone_thin = localFont({
  src: "../../public/fonts/Z06-Walone-Thin.ttf",
  display: "swap",
  variable: "--font-z06-walone-thin",
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Generated by Htet Thu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressContentEditableWarning
      suppressHydrationWarning
      className={`${walone_bold.variable} ${walone_regular.variable} ${walone_thin.variable} ${archivo.variable}`}    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  const isSystemTheme = localStorage.getItem('systemPreference') === 'true';
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const appliedTheme = isSystemTheme ? systemTheme : theme;
                  document.documentElement.setAttribute('data-theme', appliedTheme);
                  document.documentElement.setAttribute('theme', theme);
                } catch (e) {
                  console.error('Error applying theme:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Main>{children}</Main>
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
