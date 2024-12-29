"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { BackgroundBeamsWithCollision } from "../components/animations/BackgroundBeams";
import { cn } from "@/lib/utils"; // Import the utility function

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
    <BackgroundBeamsWithCollision>
      <div
        id="home"
        className={cn(
          "relative text-white min-h-screen flex flex-col justify-center items-center p-8 text-center overflow-hidden"
        )}
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

        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8 leading-relaxed">{message}</p>
        <div className="flex gap-4 mb-8">
          {icons.map((icon, index) => (
            <a
              key={`social-icon-${index}`}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-2xl text-white transition-transform duration-300",
                "hover:scale-110"
              )}
            >
              <FontAwesomeIcon icon={getIcon(icon.name)} />
            </a>
          ))}
        </div>
        <a
          href="#aboutme"
          className={cn(
            "inline-block px-6 py-3 text-lg text-white bg-blue-600 rounded-md",
            "transition-colors duration-300 hover:bg-blue-700"
          )}
        >
          Learn More About Me
        </a>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default MainBody;
