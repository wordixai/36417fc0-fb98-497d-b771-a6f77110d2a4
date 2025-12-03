import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/content";

const categories = ["All", "Residential", "Commercial", "Cultural", "Interior"];

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm tracking-wide whitespace-nowrap px-4 py-2 transition-colors ${
                selectedCategory === category
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted mb-4">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-light">{project.title}</h3>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">{project.category} / {project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
