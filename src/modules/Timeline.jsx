import React from "react";
import styles from "./Timeline.module.css";

const timelineData = [
  { year: "2021", text: "Started learning HTML, CSS, and basic JavaScript" },
  { year: "2022", text: "Moved into React and backend development with C#" },
  { year: "2023", text: "Began building cross-platform apps with Flutter" },
  { year: "2024", text: "Integrated Firebase, Docker, and CI/CD workflows" },
  { year: "2025", text: "Designing full-stack systems with .NET, SQL, and GCP" },
];

const Timeline = () => {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.title}>My Journey</h2>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div
              className={`${styles.content} ${
                index % 2 === 0 ? styles.top : styles.bottom
              }`}
            >
              <h3>{item.year}</h3>
              <p>{item.text}</p>
            </div>
            <div className={styles.circle}>{index + 1}</div>
            {index < timelineData.length - 1 && <div className={styles.line}></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
