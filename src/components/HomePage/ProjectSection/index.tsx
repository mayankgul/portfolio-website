import { useState, memo, useCallback } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "./constants";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import clsx from "clsx";
import { useMediaQueries } from "../../../hooks/useMediaQueries";

const ProjectSection = () => {
  const { isMobile } = useMediaQueries();
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.featured);

  const handleFilterChange = useCallback((newFilter: "all" | "featured") => {
    setFilter(newFilter);
  }, []);

  return (
    <section
      className="bg-gray-900 text-white py-16 px-4 md:px-8 lg:px-12"
      id="projects"
    >
      {/* Show header on both tablet and desktop */}
      {!isMobile && (
        <SectionHeader
          title="My Projects"
          subtitle="Here are some of the projects I've worked on. Each project reflects my skills and passion for building exceptional digital experiences."
        />
      )}

      {/* Simple title for mobile */}
      {isMobile && (
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
      )}

      {/* Filter Buttons - Show on tablet and desktop */}
      {!isMobile && (
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-800 rounded-lg p-1">
            <button
              className={clsx(
                "px-4 py-2 rounded-md transition-all",
                filter === "all"
                  ? "bg-primary text-primaryText font-medium"
                  : "hover:bg-gray-700 text-white"
              )}
              onClick={() => handleFilterChange("all")}
            >
              All Projects
            </button>
            <button
              className={clsx(
                "px-4 py-2 rounded-md transition-all",
                filter === "featured"
                  ? "bg-primary text-primaryText font-medium"
                  : "hover:bg-gray-700 text-white"
              )}
              onClick={() => handleFilterChange("featured")}
            >
              Featured
            </button>
          </div>
        </div>
      )}

      {/* Projects Container */}
      <motion.div
        className={clsx("mx-auto", isMobile ? "max-w-lg" : "max-w-7xl")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Show filtered projects on both tablet and desktop, all projects on mobile */}
        {(isMobile ? PROJECTS : filteredProjects).map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isEven={index % 2 !== 0}
          />
        ))}

        {!isMobile && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-300">No projects found.</p>
          </div>
        )}
      </motion.div>

      {/* View More Projects - Show on tablet and desktop */}
      {!isMobile &&
        filter === "featured" &&
        PROJECTS.length > filteredProjects.length && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              className="bg-transparent border border-primary text-white hover:bg-primary/10 px-6 py-2 rounded-lg font-medium transition-colors"
              onClick={() => handleFilterChange("all")}
            >
              View All Projects
            </button>
          </motion.div>
        )}
    </section>
  );
};

export default memo(ProjectSection);
