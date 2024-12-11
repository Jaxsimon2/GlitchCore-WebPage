"use client";

import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <ul className="list-disc pl-6">
          <li>Web Application for Event Management</li>
          <li>E-commerce Website</li>
          <li>Mobile Weather App</li>
        </ul>
      </main>
      <Footer /> 
    </div>
  );
}
