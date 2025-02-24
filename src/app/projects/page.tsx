import Projects from "@/components/projectsPage/Projects";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen container mx-auto">
      <section className="text-center my-16 space-y-5">
        <p className="text-xl text-blue-600 underline underline-offset-8">Check Out Our Latest Projects</p>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Transforming Your Ideas Into Reality With SoftPirex. Check Out Our
          Latest Projects.
        </h1>
      </section>
      <Projects />
    </main>
  );
};

export default page;
