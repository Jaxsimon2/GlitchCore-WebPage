"use client";

import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to GlitchCore </h1>
        <p className="leading-7">
          Feel free to explore our website to learn more about us, our project and how to contact us. 
        </p>
      </main>
      <Footer /> 
    </div>
  );
}