"use client";
import React from "react";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project/Project";

const HomePage = () => {
  return (
    <main>
      <MainBody
        gradient="rgba(255, 0, 150, 0.8), rgba(0, 204, 255, 0.8)"
        title="Ayush's Portfolio"
        message="Welcome to my portfolio! Explore my projects, skills, and more."
        icons={[
          { url: "https://github.com/ayushchahat", name: "github" },
          { url: "https://www.linkedin.com/in/ayush-kumar11", name: "linkedin" },
          { url: "https://x.com/AyushCh72327242?t=i60SWcPPPNHqyJG5Oj6bJg&s=09", name: "twitter" },
        ]}
      />
      <section
        id="aboutme"
        style={{
          padding: "50px 20px",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <AboutMe
          heading="About Me"
          message="My name is Ayush Kumar. I am a B.Tech student at Motilal Nehru National Institute of Technology, Allahabad, pursuing Mechanical Engineering with a strong interest in software development. I am passionate about contributing to innovative projects and using my skills to build impactful solutions. I enjoy developing full-stack web applications and have worked on several MERN stack projects like GoFoodie, Chat-Now, and Smart Agro, which involved real-time data handling, scalable backend systems, and user-friendly interfaces. In my free time, I actively solve problems on GeeksforGeeks and LeetCode, enhancing my algorithmic and problem-solving skills."
          resume="https://drive.google.com/file/d/1E9fQ05ieyej34VWkwu8xYdI5zT7ZrRL-/view?usp=sharing"
          imgSize={150}
        />
      </section>

      {/* Use the Project component to dynamically display projects */}
      <Project />

      <section
        id="skills"
        style={{
          padding: "50px 20px",
          backgroundColor: "#f4f4f4",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>
          Skills
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Here are some of the technologies and tools I work with:
        </p>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <li
            style={{
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            JavaScript/TypeScript
          </li>
          <li
            style={{
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            React.js and Next.js
          </li>
          <li
            style={{
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Node.js and Express.js
          </li>
          <li
            style={{
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            MongoDB and SQL
          </li>
          <li
            style={{
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            HTML, CSS, and Tailwind
          </li>
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
