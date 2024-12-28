"use client";
import React from "react";

interface AboutMeProps {
  heading: string;
  message: string;
  resume: string;
  imgSize: number;
}

const AboutMe: React.FC<AboutMeProps> = ({
  heading,
  message,
  resume,
  imgSize,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center the content on larger screens
        alignItems: "center",
        padding: "3rem 2rem",
        backgroundColor: "#f4f7fa",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%", // Full-width
        margin: "2rem 0", // Removed auto margin for full width
        flexDirection: "column", // Stack on smaller screens
        textAlign: "center", // Center text by default
      }}
    >
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center", // Center image
          flexWrap: "wrap", // Allow wrapping for responsiveness
        }}
      >
        <img
          src="/ayush-profile.jpeg"
          alt="Ayush Kumar"
          style={{
            borderRadius: "50%",
            width: `${imgSize}px`,
            height: `${imgSize}px`,
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      <div style={{ width: "100%" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            color: "#333",
            marginBottom: "1rem",
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#555",
            lineHeight: "1.6",
            marginBottom: "1.5rem",
          }}
        >
          {message}
        </p>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#0070f3",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "1.1rem",
            border: "none",
            borderRadius: "5px",
            textDecoration: "none",
            display: "inline-block",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#005bb5")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0070f3")}
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
