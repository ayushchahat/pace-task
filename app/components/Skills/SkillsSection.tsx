"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import SkillsSection from "./SkillsSection";

const SkillsTab = ({ skills, isScrolled }: any) => {
  const mid = Math.floor(skills.length / 2);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(0, mid)}
          isScrolled={isScrolled}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(mid)}
          isScrolled={isScrolled}
        />
      </Grid>
    </Grid>
  );
};

export default SkillsTab;
