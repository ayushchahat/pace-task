import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "../../styles/Project.module.css";

const Project = () => {
  const projects = [
    {
      title: "Smart Agro",
      description:
        "An IoT-based smart agriculture system for monitoring and controlling farm conditions.",
      repoLink: "https://github.com/ayushchahat/Smart_Agro",
      demoLink: "https://smart-agro.com",
      technologies: ["MongoDB, Express.js, React.js, Node.js"],
    },
    {
      title: "GoFoodie",
      description:
        "A full-stack application for food delivery, providing real-time order tracking and notifications.",
      repoLink: "https://github.com/ayushchahat/Gofood",
      demoLink: "https://gofood-frontend-my1b.onrender.com/",
      technologies: [ "React.js, Bootstrap, Node.js, Express.js, MongoDB"],
    },
    {
      title: "Chat-Now",
      description:
        "A real-time messaging app with support for one-on-one and group chats.",
      repoLink: "https://github.com/ayushchahat/Chat_Bot",
      demoLink: "https://chat-now-7mbr.onrender.com/",
      technologies: [" React.js, Chakra UI, Node.js, Express.js, MongoDB, Socket.io"],
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
