import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:saurabhjain374@gmail.com">saurabhjain374@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/saurabhjain374/">linkedin.com/saurabhjain374</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/saurabhjain374">github.com/saurabhjain374</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phone.png")} alt="Github icon" />
          <div className={styles.text}>
          <h1>+91-8121109505</h1>
          </div>
        </li>
      </ul>
    </footer>
  );
};
