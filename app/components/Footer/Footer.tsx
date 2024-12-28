"use client";
import React from "react";
import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>
          <i className="fas fa-code"></i> Crafted with{" "}
          <i className="fas fa-heart"></i> by{" "}
          <a
            href="https://www.linkedin.com/in/ayush-kumar11"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Ayush Kumar
          </a>
        </p>
        <p className={styles.text}>
          Powered by{" "}
          <i className="fab fa-react"></i> Next.js &{" "}
          <i className="fab fa-node"></i> Node.js
        </p>
        <div className={styles.links}>
          <a
            href="https://github.com/ayushchahat"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-kumar11"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/ayushchahsha3"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <i className="fas fa-book"></i>
          </a>
          <a
            href="https://leetcode.com/Ayushkumar11/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <i className="fas fa-code"></i>
          </a>
        </div>
        <p className={styles.copyright}>
          © 2024 Ayush Kumar | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
