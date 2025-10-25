import { memo } from "react";
import { motion } from "framer-motion";
import { Project } from "./constants";
import { ExternalLink, Github } from "lucide-react";
import { useMediaQueries } from "../../../hooks/useMediaQueries";
import clsx from "clsx";

interface ProjectCardProps {
  project: Project;
  index: number;
  isEven: boolean;
}

const ProjectCard = ({ project, index, isEven }: ProjectCardProps) => {
  const { isMobile } = useMediaQueries();

  return (
    <motion.div
      className={clsx(
        "items-center mb-20",
        isMobile
          ? "flex flex-col gap-6"
          : `flex flex-row gap-10 ${isEven ? "flex-row-reverse" : ""}`
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Project Image */}
      <div
        className={clsx(
          "overflow-hidden rounded-lg shadow-lg",
          isMobile ? "w-full" : "w-1/2"
        )}
      >
        <motion.div
          className="relative aspect-video w-full"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
        </motion.div>
      </div>

      {/* Project Info */}
      <div className={clsx("space-y-4", isMobile ? "w-full" : "w-1/2")}>
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-base md:text-lg text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {project.description}
        </motion.p>

        {/* Technologies */}
        <motion.div
          className="flex flex-wrap gap-2 py-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className={`${tech.color} px-3 py-1 rounded-full text-sm font-medium text-white`}
            >
              {tech.name}
            </span>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          className="flex gap-4 pt-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              <span>Source Code</span>
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(ProjectCard);
