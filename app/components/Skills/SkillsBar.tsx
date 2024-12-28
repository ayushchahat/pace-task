"use client";
import React from "react";
import styles from "../../styles/Skills.module.css";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

const SkillsBar = ({ skill, value, isScrolled }: any) => {
  return (
    <div className={styles.skillsBar}>
      <Typography variant="h6" className={styles.skillName}>
        {skill}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={isScrolled ? value : 0}
        className={styles.progressBar}
      />
    </div>
  );
};

export default SkillsBar;
