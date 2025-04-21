"use client";

import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">MaplePay</h1>
        <ul className="list-disc pl-6">
        <p className="leading-7">
        MaplePay is an Employee Management System designed to streamline and simplify workforce management
        by integrating attendance tracking and payroll processing into a single, convenient platform. 
        The system offers key features such as employee clock-in/out management, schedule management, 
        and automated payroll calculation, providing a comprehensive solution
         to enhance operational efficiency and reduce administrative workload.
        </p>
      </ul>
      </main>
      <Footer /> 
    </div>
  );
}
