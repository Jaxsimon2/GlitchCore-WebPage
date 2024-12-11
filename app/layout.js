"use client";

import "./globals.css";
import { DarkModeProvider } from "./components/DarkModeContext";
import NavBar from "./components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DarkModeProvider>
           <NavBar /> 
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {children}
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}
