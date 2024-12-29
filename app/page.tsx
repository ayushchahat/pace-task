"use client";
import React from "react";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Achievements from "./components/Achievements/Achievements";
import Footer from "./components/Footer/Footer";
const HomePage = () => {
  return (
    <main>
      <MainBody
        gradient="rgba(255, 0, 150, 0.8), rgba(0, 204, 255, 0.8)"
        title="Ayush's Portfolio"
        message="Welcome to my portfolio! Explore my projects, skills, and more."
        icons={[
          { url: "https://github.com/ayushchahat", name: "github" },
          {
            url: "https://www.linkedin.com/in/ayush-kumar11",
            name: "linkedin",
          },
          {
            url: "https://x.com/AyushCh72327242?t=i60SWcPPPNHqyJG5Oj6bJg&s=09",
            name: "twitter",
          },
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

      {/* Project Section */}
      <Project />
      {/* Achievements Section */}
      <Achievements
        heading="Achievements"
        achievements={[
          {
            img: "/images/achievement1.png",
            title: "Knight on LeetCode",
            description:
              "Achieved 'Knight' status on LeetCode by solving 495 DSA problems.",
          },
          {
            img: "/images/achievement2.png",
            title: "3-Star on GeeksforGeeks",
            description:
              "Earned 3-star status on GeeksforGeeks by solving 657 DSA problems.",
          },
          {
            img: "/images/achievement3.png",
            title: "LeetCode Weekly Contest",
            description:
              "Ranked 166th globally out of 35,709 participants in Weekly Contest 414.",
          },
        ]}
      />

      {/* Skills Section */}
      <section
        id="skills"
        style={{
          padding: "50px 20px",
          backgroundColor: "#f4f4f4",
          textAlign: "center",
        }}
      >
        <Skills
          heading="Skills"
          hardSkills={[
            { name: "JavaScript/TypeScript", value: 75 },
            { name: "React.js and Next.js", value: 80 },
            { name: "Node.js and Express.js", value: 70 },
            { name: "MongoDB and SQL", value: 85 },
            { name: "HTML, CSS, and Tailwind", value: 90 },
          ]}
          softSkills={[
            { name: "Communication", value: 80 },
            { name: "Problem Solving", value: 90 },
            { name: "Team Collaboration", value: 85 },
            { name: "Time Management", value: 70 },
          ]}
        />
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
