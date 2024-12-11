"use client";

import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Who Am I?</h2>
        <p className="leading-7">
        I am deeply passionate about data analysis and have developed a strong technical foundation through my studies in the 
        Software Development Diploma program at the Southern Alberta Institute of Technology (SAIT). While I enjoyed the computational
        and digital aspects of software development, I realized that my true passion lies in exploring and analyzing data to uncover
        patterns that drive better decision-making. My goal is to pursue a career as a Data Scientist, leveraging my analytical abilities
        and technical skills to predict outcomes and derive actionable insights from data. I thrive in dynamic environments where thinking 
        and doing happen simultaneously, as demonstrated during a group project at SAIT where I quickly implemented new ideas and collaborated 
        with teammates to resolve challenges. Additionally, I have a keen interest in Artificial Intelligence (AI), sparked by an introductory 
        program I participated in during high school. I am eager to deepen my knowledge in AI and machine learning, as I believe these fields 
        are essential for advancing data analysis and decision-making in the future. I am also an optimistic person who values making a positive
        impact on others. Whether through humor, empathy, or small acts of kindness, I strive to bring joy and support to those around me.
        In my professional life, I aim to help businesses harness the power of data to improve outcomes, solve problems, and create better
        experiences for both customers and employees. In summary, I am passionate about data and eager to continue developing my skills to 
        contribute meaningfully to both individuals and organizations.
        </p>
      </main>
      <Footer /> 
    </div>
  );
}
