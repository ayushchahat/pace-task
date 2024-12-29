"use client";

import { motion } from "framer-motion";
import React from "react";
import { GoCopilot } from "react-icons/go";
import styles from "../../styles/Project.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  repoLink?: string;
  demoLink?: string;
  technologies?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "Untitled Project",
  description = "No description provided.",
  repoLink,
  demoLink,
  technologies = [],
}) => {
  return (
    <motion.div
      className={styles.projectCard}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{title}</h3>
        {/* <GoCopilot className={styles.icon} /> */}
      </div>

      <p className={styles.description}>{description}</p>

      {technologies.length > 0 && (
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className={styles.btnContainer}>
        {repoLink && (
          <motion.a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
            whileHover={{ backgroundColor: "#1f2937", color: "#fff" }}
            aria-label={`View repository for ${title}`}
          >
            View Repository
          </motion.a>
        )}
        {demoLink && (
          <motion.a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
            whileHover={{ backgroundColor: "#1f2937", color: "#fff" }}
            aria-label={`View demo for ${title}`}
          >
            View Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
