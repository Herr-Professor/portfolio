import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Hero = () => {
  const name = "Farouq Oguntoye";
  const yearsExperience = "4";
  const primaryHeadline = `Hey There, <br /> I'm ${name}.`;
  const secondaryHeadline = `A Software Engineer crafting robust backend systems (C++, Python)
    and full-stack applications (JavaScript), with deep dives into
    Blockchain technology and AI Research.`;
    
  const focusAreas = [
    "Backend Development",
    "Full Stack Solutions",
    "Blockchain & Security",
    "AI Research"
  ];
  const email = "farouqoguntoye05@gmail.com";

  return (
    <section id="about" className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
      
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
            dangerouslySetInnerHTML={{ __html: primaryHeadline }}
          />
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
            dangerouslySetInnerHTML={{ __html: secondaryHeadline }}
          />
        </div>

        <motion.div
          className={css.contactInfo}
          variants={fadeIn("up", "tween", 0.3, 1)}
        >
          <a className={css.email} href={`mailto:${email}`} aria-label="Email Me">
            <FiMail size={20} /> <span>{email}</span>
          </a>
        </motion.div>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            
            <div className="primaryText">{yearsExperience}+</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.focusAreas}>
             {focusAreas.map((area, index) => (
               <span key={index}>{area}</span>
             ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
