import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const linkedinUrl = "https://www.linkedin.com/in/farouq-oguntoye-577b83195/";
  const twitterUrl = "https://twitter.com/HeerProfessor";
  const githubUrl = "https://github.com/Herr-Professor";
  const email = "farouqoguntoye05@gmail.com";
  const location = "Nigeria";

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's build the <br />
            future together.
          </span>
          <span className={`primaryText ${css.contactAction}`}>
            Start by <a href={`mailto:${email}`}>saying Hello</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Location</span>
            <p>{location}</p>
          </div>

          <div className={css.socialLinks}>
            <span className="secondaryText">Follow Me:</span>
            <div className={css.iconsContainer}> 
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
