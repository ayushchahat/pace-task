import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../../styles/Project.module.css";

const Project = () => {
  const projects = [
    {
      title: "GoFoodie",
      description:
        "A full-stack application for food delivery, providing real-time order tracking and notifications.",
      repoLink: "https://github.com/ayushchahat/GoFoodie",
      demoLink: "https://gofoodie.com",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Chat-Now",
      description:
        "A real-time messaging app with support for one-on-one and group chats.",
      repoLink: "https://github.com/ayushchahat/Chat-Now",
      demoLink: "https://chat-now.com",
      technologies: ["React.js", "Socket.IO", "Node.js"],
    },
    {
      title: "Smart Agro",
      description:
        "An IoT-based smart agriculture system for monitoring and controlling farm conditions.",
      repoLink: "https://github.com/ayushchahat/Smart-Agro",
      demoLink: "https://smart-agro.com",
      technologies: ["Node.js", "Express", "MongoDB", "IoT"],
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>Projects</h2>
      <p className={styles.subtitle}>
        Explore some of the projects I have worked on:
      </p>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            repoLink={project.repoLink}
            demoLink={project.demoLink}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
