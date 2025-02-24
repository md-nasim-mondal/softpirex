"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Flash Message",
    description:
      "A modern messaging platform designed for seamless communication.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60",
    category: "Web App",
  },
  {
    id: 2,
    title: "Luis Antonio Tavares",
    description: "Portfolio website showcasing creative work and achievements.",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&auto=format&fit=crop&q=60",
    category: "Portfolio",
  },
  {
    id: 3,
    title: "Tourdelisboa",
    description: "Travel guide application for exploring Lisbon's hidden gems.",
    image:
      "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?w=800&auto=format&fit=crop&q=60",
    category: "Travel",
  },
  {
    id: 4,
    title: "My Adventure Tube",
    description: "Video platform for sharing travel and adventure experiences.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=60",
    category: "Entertainment",
  },
  {
    id: 5,
    title: "Digital Portfolio",
    description: "Showcase of digital artwork and creative projects.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    category: "Portfolio",
  },
  {
    id: 6,
    title: "Urban Explorer",
    description: "City guide app for urban adventures and local discoveries.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&auto=format&fit=crop&q=60",
    category: "Travel",
  },
];

const Projects: FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <main className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="group relative rounded-xl overflow-hidden transition-shadow duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-xl" />
            </div>

            <>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  {project.title}
                </h3>
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 rounded-full">
                  {project.category}
                </span>
              </div>
              <p className="text-gray-600">{project.description}</p>

              <Link
                href="#"
                className="mt-4 inline-flex items-center bg-blue-100 px-3 py-1 hover:px-6 hover:bg-blue-500 hover:text-white transition-all rounded-full text-blue-600"
              >
                View Project <GoArrowUpRight />
              </Link>
            </>
          </motion.div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="w-full bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            Load More Projects
          </button>
        </div>
      )}
    </main>
  );
};
export default Projects;
