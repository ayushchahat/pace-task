"use client";

import React, { useState, useEffect, useRef, ForwardedRef } from "react";
import { useScrollPosition } from "./hooks/useScrollPosition";
import { useResizeObserver } from "./hooks/useResizeObserver";
import styles from "../styles/Navigation.module.css"; // Import CSS module

const Navigation: React.FC = () => {
  const [isTop, setIsTop] = useState(true);

  return (
    <nav className={`${styles.navbar} ${isTop ? styles["navbar-transparent"] : styles["navbar-white"]}`}>
      <div className={styles["navbar-brand"]}>{"<Your Name />"}</div>
      <div>
        <a className={styles["nav-link"]} href="#projects">Projects</a>
        <a className={styles["nav-link"]} href="#about">About</a>
        <a className={styles["nav-link"]} href="#skills">Skills</a>
      </div>
    </nav>
  );
};

export default Navigation;
