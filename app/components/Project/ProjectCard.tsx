// app/components/Project/ProjectCard.tsx
import React from "react";
import CardFooter from "./CardFooter";
import Language from "./Language";
import CardButtons from "./CardButtons";
import styles from "../../styles/ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  repoLink: string;
  demoLink: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, repoLink, demoLink, technologies }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Language technologies={technologies} />
        <CardButtons repoLink={repoLink} demoLink={demoLink} />
      </div>
      <CardFooter />
    </div>
  );
};

export default ProjectCard;
