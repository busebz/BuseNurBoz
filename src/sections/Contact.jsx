import {
  FiMail,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

import classes from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.left}>
            <span className={classes.eyebrow}>
              GET IN TOUCH
            </span>

            <h2>Let&apos;s Talk.</h2>

            <div className={classes.titleLine}></div>

            <p className={classes.description}>
              If you&apos;d like to discuss a project, an opportunity,
              or anything tech-related, feel free to get in touch.
            </p>
          </div>

          <div className={classes.divider}></div>

          <div className={classes.right}>
            <a
              href="mailto:bozbusenur1@gmail.com"
              className={classes.contactItem}
            >
              <div className={classes.iconBox}>
                <FiMail />
              </div>

              <div className={classes.contactText}>
                <span className={classes.label}>Email</span>
                <span className={classes.value}>
                  bozbusenur1@gmail.com
                </span>
              </div>

              <FiArrowUpRight className={classes.arrow} />
            </a>

            <a
              href="https://www.linkedin.com/in/buse-nur-boz-30a987253/"
              target="_blank"
              rel="noreferrer"
              className={classes.contactItem}
            >
              <div
                className={`${classes.iconBox} ${classes.linkedin}`}
              >
                <FaLinkedinIn />
              </div>

              <div className={classes.contactText}>
                <span className={classes.label}>LinkedIn</span>
                <span className={classes.value}>
                  linkedin.com/in/busenurboz
                </span>
              </div>

              <FiArrowUpRight className={classes.arrow} />
            </a>

            <a
              href="https://github.com/busebz"
              target="_blank"
              rel="noreferrer"
              className={classes.contactItem}
            >
              <div
                className={`${classes.iconBox} ${classes.github}`}
              >
                <SiGithub />
              </div>

              <div className={classes.contactText}>
                <span className={classes.label}>GitHub</span>
                <span className={classes.value}>
                  github.com/busebz
                </span>
              </div>

              <FiArrowUpRight className={classes.arrow} />
            </a>

            <div className={classes.contactItem}>
              <div
                className={`${classes.iconBox} ${classes.location}`}
              >
                <FiMapPin />
              </div>

              <div className={classes.contactText}>
                <span className={classes.label}>Location</span>
                <span className={classes.value}>
                  Istanbul, Türkiye
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;