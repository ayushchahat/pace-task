"use client";
import React from "react";
import AboutMe from "./components/AboutMe";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" style={{ padding: "50px 20px", textAlign: "center" }}>
        <h1>Ayush's Portfolio</h1>
        <p>Welcome to my portfolio! Explore my projects, skills, and more.</p>
      </section>
      {/* About Me Section */}
      <section id="aboutme" style={{ padding: "50px 20px" }}>
        <AboutMe
          heading="About Me"
          message="My name is Ayush Kumar. I am a B.Tech student at Motilal Nehru National Institute of Technology, Allahabad, pursuing Mechanical Engineering with a strong interest in software development. I am passionate about contributing to innovative projects and using my skills to build impactful solutions. I enjoy developing full-stack web applications and have worked on several MERN stack projects like GoFoodie, Chat-Now, and Smart Agro, which involved real-time data handling, scalable backend systems, and user-friendly interfaces. In my free time, I actively solve problems on GeeksforGeeks and LeetCode, enhancing my algorithmic and problem-solving skills."
          resume="https://drive.google.com/file/d/1E9fQ05ieyej34VWkwu8xYdI5zT7ZrRL-/view?usp=sharing"
          imgSize={150}
        />
      </section>
      {/* Projects Section */}
      <section id="projects" style={{ padding: "50px 20px" }}>
        <h2>Projects</h2>
        <p>Explore some of the projects I have worked on:</p>
        <ul>
          <li>
            <strong>Project 1:</strong> A full-stack application for food
            delivery.
          </li>
          <li>
            <strong>Project 2:</strong> An e-commerce website with React and
            Node.js.
          </li>
          <li>
            <strong>Project 3:</strong> A personal blog platform with Next.js.
          </li>
        </ul>
      </section>

      

      {/* Skills Section */}
      <section id="skills" style={{ padding: "50px 20px" }}>
        <h2>Skills</h2>
        <p>Here are some of the technologies and tools I work with:</p>
        <ul>
          <li>JavaScript/TypeScript</li>
          <li>React.js and Next.js</li>
          <li>Node.js and Express.js</li>
          <li>MongoDB and SQL</li>
          <li>HTML, CSS, and Tailwind</li>
        </ul>
      </section>
    </main>
  );
}
