// app/components/Project/CardButtons.tsx
import React from "react";

interface CardButtonsProps {
  repoLink: string;
  demoLink: string;
}

const CardButtons: React.FC<CardButtonsProps> = ({ repoLink, demoLink }) => {
  return (
    <div>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        <button>View Repo</button>
      </a>
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        <button>View Demo</button>
      </a>
    </div>
  );
};

export default CardButtons;
