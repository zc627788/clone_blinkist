// Timeline.js
import React from "react";
import styles from "./Timeline.module.css"; // 导入样式文件
console.log(styles.timeline);
const Timeline = () => {
  return (
    <ul className={styles.timeline}>
      <li className={styles.timeline__step}>
        <div className={styles.timeline__axis}>
          <div className={styles.timeline__bullet}></div>
          <div className={styles.timeline__line}></div>
        </div>
        <div className={styles.timeline__label}>Today</div>
        <p className={styles.timeline__text}>
          Start enjoying the entire library of Blinks and shows.
        </p>
      </li>
      <li
        className={`${styles.timeline__step} ${styles["timeline__step--reminder"]}`}
      >
        <div className={styles.timeline__axis}>
          <div className={styles.timeline__bullet}></div>
          <div className={styles.timeline__line}></div>
        </div>
        <div className={styles.timeline__label}>Day 5</div>
        <p className={styles.timeline__text}>
          We' ll send you a <strong>reminder</strong> email that your trial is
          ending.
        </p>
      </li>
      <li
        className={`${styles.timeline__step} ${styles["timeline__step--last"]}`}
      >
        <div className={styles.timeline__axis}>
          <div className={styles.timeline__bullet}></div>
          <div className={styles.timeline__line}></div>
        </div>
        <div className={styles.timeline__label}>Day 7</div>
        <p className={styles.timeline__text}>Free trial ends.</p>
      </li>
      <li className={styles.timeline__finish}></li>
    </ul>
  );
};

export default Timeline;
