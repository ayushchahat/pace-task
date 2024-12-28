import React from "react";
import styles from "../../styles/Project.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  repoLink: string;
  demoLink: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  repoLink,
  demoLink,
  technologies,
}) => {
  return (
    <div className={styles.projectCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.technologies}>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <a href={repoLink} target="_blank" rel="noopener noreferrer" className={styles.btn}>
        View Repository
      </a>
      <a href={demoLink} target="_blank" rel="noopener noreferrer" className={styles.btn}>
        View Demo
      </a>
    </div>
  );
};

export default ProjectCard;
