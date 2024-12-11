"use client";

import Footer from "../components/Footer";

export default function Skills() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Skills</h1>
        <ul className="list-disc pl-6">
          <li>JavaScript</li>
          <li>React & Next.js</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          <li>Database Management (SQL)</li>
        </ul>
      </main>
      <Footer /> 
    </div>
  );
}
