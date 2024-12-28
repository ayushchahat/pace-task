// app/components/Project/Language.tsx
import React from "react";

interface LanguageProps {
  technologies: string[];
}

const Language: React.FC<LanguageProps> = ({ technologies }) => {
  return (
    <div>
      <h4>Technologies:</h4>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
