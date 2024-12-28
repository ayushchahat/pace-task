"use client";
import React, { useRef, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SkillsTab from "./SkillsTab";
import { useScrollPosition } from "../hooks/useScrollPosition";

const Skills = ({ heading, hardSkills, softSkills }: any) => {
  const skillsRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useScrollPosition(
    ({ currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsRef
  );

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
