"use client";
import React, { useRef, useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SkillsTab from "./SkillsTab";

const Skills = ({ heading, hardSkills, softSkills }: any) => {
  const skillsRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const elementPosition = skillsRef.current?.getBoundingClientRect();
      if (elementPosition && !isScrolled && elementPosition.top - 400 < 0) {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <section ref={skillsRef} className="skills-section">
      <Container maxWidth="lg">
        <h2 className="skills-heading">{heading}</h2>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="Technical Skills" />
            <Tab label="Soft Skills" />
          </Tabs>
        </Box>
        {activeTab === 0 && (
          <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
        )}
        {activeTab === 1 && (
          <SkillsTab skills={softSkills} isScrolled={isScrolled} />
        )}
      </Container>
    </section>
  );
};

export default Skills;
