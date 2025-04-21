"use client";

import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">What is GlitchCore?</h2>
        <p className="leading-7">
        GlitchCore is a group of 5 dedicated and skilled individuals coming together
         with a mission of developing efficient, creative, and functional software solutions. 
         Comprising of passionate programmers with expertise in various languages, including Python, Java, React & SQL. 
         GlitchCore collaborates to design, implement, and optimize programs that address real-world challenges with precision and innovation.
        </p>
      </main>
      <Footer /> 
    </div>
  );
}
