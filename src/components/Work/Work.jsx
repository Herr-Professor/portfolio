import React from "react";
import css from "./Work.module.scss";
import { motion } from 'framer-motion';
import { draw, fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";

const actualWorkExp = [
 {
    place: "Tonfans",
    tenure: "Sept 2024 - Jan 2025",
    role: "Lead Developer (Blockchain/Bot)",
    detail: "Led development of a core Telegram bot integrating TON blockchain (NFT/Jetton purchases, chat access). Developed Tonfans NFT & SHIVA Jetton smart contracts and backend logic.",
 },
 {
    place: "Lifestores Pharmacy",
    tenure: "Sept 2022 - Aug 2024",
    role: "Systems Engineer",
    detail: "Designed & implemented high-performance C++ systems for real-time order processing, including custom memory management & telemetry, improving throughput by 25%.",
 },
 {
    place: "Ultra Cloud Technologies",
    tenure: "Aug 2021 - June 2022",
    role: "Backend Developer",
    detail: "Developed/maintained Python/Flask REST APIs handling 1k+ daily requests, optimized SQL queries reducing latency by 30%, and containerized services using Docker.",
 },
];


const Work = () => {
  return (
    <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>

        <a className="anchor" id="work"></a>

        <div className={`innerWidth flexCenter ${css.container}`}>
            <motion.span variants={textVariant2} className="primaryText yPaddings">My Work Experience</motion.span>

            <div className={`flexCenter ${css.experiences}`}>
                {actualWorkExp.map((exp, i) => {
                    return (
                        <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                            {/* Place and Tenure */}
                            <div className={css.post}>
                                <h1>{exp.place}</h1>
                                <p>{exp.tenure}</p>
                            </div>
                            <div className={css.role}>
                                <h1>{exp.role}</h1>
                                <p>{exp.detail}</p>
                            </div>
                        </motion.div>
                    );
                })}

                {actualWorkExp.length > 0 && (
                    <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
                        <motion.div variants={fadeIn("down", "tween", 0.5, 1.5)} className={css.line}></motion.div> 
                        {actualWorkExp.map((exp, i) => (
                           <div key={i}><div className={css.circle} ></div></div>
                        ))}
                    </motion.div>
                )}

            </div>
        </div>
    </motion.section>
  );
};

export default Work;
