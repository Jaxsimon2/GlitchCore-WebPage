"use client";

import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Who Am I?</h2>
        <p className="leading-7">
          I am a software developer with a passion for building innovative applications. I have experience working with various web and mobile technologies.
        </p>
      </main>
      <Footer /> 
    </div>
  );
}
