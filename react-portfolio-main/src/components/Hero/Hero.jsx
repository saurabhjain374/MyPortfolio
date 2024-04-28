import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saurabh</h1>
        <p className={styles.description}>
         Technical Lead | Senior Developer | Full Stack Dot Net Developer | Dot Net Architect | Problem Solver
        </p>
        <a href="mailto:saurabhjain374@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Saurabh.png")}
        alt="my photo"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
