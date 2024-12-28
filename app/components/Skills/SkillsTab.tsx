"use client";
import React from "react";
import SkillsBar from "./SkillsBar";

const SkillsSection = ({ skills, isScrolled }: any) => {
  return (
    <>
      {skills.map((skill: any, index: number) => (
        <SkillsBar
          key={`${skill.name}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
};

export default SkillsSection;
