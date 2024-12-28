"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "../../styles/Achievements.module.css";

interface Achievement {
  img: string;
  title: string;
  description: string;
}

interface AchievementsProps {
  heading: string;
  achievements: Achievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ heading, achievements }) => {
  return (
    <section id="achievements" className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            As a React developer with leadership experience, I bring technical
            expertise, project management skills, and strong communication
            abilities. I have successfully developed and deployed scalable
            applications like GoFoodie, Chat-Now, and Smart Agro, showcasing
            innovation and teamwork. My ability to solve complex problems and
            mentor team members fosters a collaborative environment. Below are
            some key achievements:
          </p>
          <ul className={styles.achievementList}>
            <li>
              Coordinated E-Cell events, boosting startup engagement in college.
            </li>
            <li>
              Achieved a global rank of 166th in LeetCode Weekly Contest 414
              (rating: 1908).
            </li>
            <li>
              Solved 650+ problems on GeeksforGeeks and 480+ on LeetCode.
            </li>
          </ul>
        </div>
        <div className={styles.carousel}>
          <Carousel>
            {achievements.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.carouselImage}
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
