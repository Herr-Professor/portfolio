import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Latest Works</span>
            <p style={{marginTop: "10px"}}>The Amazing things you're yet to see</p>
          </div>
          <a href="https://github.com/Herr-Professor" target="_blank" rel="noopener noreferrer">
              <span className="secondaryText">Explore More Works</span>
          </a>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
         < motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="Tetris" />
            <a href="https://herr-professor.github.io/Tetris/"> <p style={{marginTop: "10px"}}>Tetris</p></a>
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" />
             <a href="https://herr-professor.github.io/kanplesAI/"> <p style={{marginTop: "10px"}}>Kanples</p></a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
