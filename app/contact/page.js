"use client";

import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="leading-7">You can reach me at: <a href="mailto:example@example.com" className="text-blue-500">example@example.com</a></p>
      </main>
      <Footer /> 
    </div>
  );
}
