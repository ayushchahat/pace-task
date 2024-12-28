"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons"; // Correct package

interface MainBodyProps {
  title: string;
  message: string;
  icons: { url: string; name: string }[];
  gradient: string;
}

const MainBody: React.FC<MainBodyProps> = ({ title, message, icons }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "github":
        return faGithub;
      case "linkedin":
        return faLinkedin;
      case "twitter":
        return faTwitter;
      default:
        return faQuestionCircle; // Fallback icon
    }
  };

  return (
    <div
      id="home"
      style={{
        animation: "gradientAnimation 16s infinite alternate ease-in-out",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background: linear-gradient(136deg, rgba(255, 0, 150, 0.8), rgba(0, 204, 255, 0.8)); }
            25% { background: linear-gradient(136deg, rgba(0, 204, 255, 0.8), rgba(255, 165, 0, 0.8)); }
            50% { background: linear-gradient(136deg, rgba(255, 165, 0, 0.8), rgba(0, 128, 128, 0.8)); }
            75% { background: linear-gradient(136deg, rgba(0, 128, 128, 0.8), rgba(138, 43, 226, 0.8)); }
            100% { background: linear-gradient(136deg, rgba(138, 43, 226, 0.8), rgba(255, 0, 150, 0.8)); }
          }
        `}
      </style>

      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>{title}</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem", lineHeight: "1.5" }}>{message}</p>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        {icons.map((icon, index) => (
          <a
            key={`social-icon-${index}`}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "2rem",
              color: "#fff",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FontAwesomeIcon icon={getIcon(icon.name)} />
          </a>
        ))}
      </div>
      <a
        href="#aboutme"
        style={{
          display: "inline-block",
          padding: "10px 30px",
          fontSize: "1.2rem",
          color: "#fff",
          background: "rgba(0, 123, 255, 0.8)",
          borderRadius: "5px",
          textDecoration: "none",
          transition: "background 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "rgba(0, 123, 255, 1)")}
        onMouseOut={(e) => (e.currentTarget.style.background = "rgba(0, 123, 255, 0.8)")}
      >
        Learn More About Me
      </a>
    </div>
  );
};

export default MainBody;
