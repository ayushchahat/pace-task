"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Navigation.module.css"; // Importing styles

const Navigation: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // State for the mobile menu
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <nav
      className={`${styles.navbar} ${isTop ? styles["navbar-transparent"] : styles["navbar-white"]}`}
      ref={navbarRef}
    >
      <div className={styles["navbar-brand"]}>{"<Ayush Kumar />"}</div>
      <button className={styles["toggle-btn"]} onClick={toggleMenu}>
        &#9776; 
      </button>
      <div className={`${styles["nav-links"]} ${menuOpen ? styles.show : ""}`}>
        <a className={styles["nav-link"]} href="#projects">Projects</a>
        <a className={styles["nav-link"]} href="#about">About</a>
        <a className={styles["nav-link"]} href="#skills">Skills</a>
        <a className={styles["nav-link"]} href="https://drive.google.com/file/d/1E9fQ05ieyej34VWkwu8xYdI5zT7ZrRL-/view?usp=sharing">Resume</a>
      </div>
    </nav>
  );
};

export default Navigation;
