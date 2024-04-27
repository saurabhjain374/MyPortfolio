import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saurabh</h1>
        <p className={styles.description}>
        Full-stack .NET developer with 12 years of experience. Skilled in Microsoft .Net
technologies - C#, Web API, MVC, WCF, WPF, Windows App, REST Services, SQL,
Elastic Search, Kafka, Rabbit MQ, Postgres, Dot Net Core, EF Core, Redis, Docker,
GitLab CICD.
        </p>
        <a href="mailto:saurabhjain374@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Saurabh.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;