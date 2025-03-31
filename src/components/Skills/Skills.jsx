import React from 'react';
import { FaCode, FaServer, FaReact, FaDatabase, FaCube, FaBrain, FaTools, FaGitAlt, FaDocker, FaPython, FaJsSquare, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiFlask, SiPostgresql } from 'react-icons/si';
import css from './Skills.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion.js';

const skillHighlights = [
  {
    icon: SiCplusplus,
    name: "C++ & Systems",
    description: "High-performance systems, custom libraries",
    bg: "#f27e7e",
  },
  {
    icon: FaPython,
    name: "Python & Backend",
    description: "Flask APIs, Data Processing, Scripting",
    bg: "#ffb74d",
  },
  {
    icon: FaJsSquare,
    name: "JavaScript & Full Stack",
    description: "React Native, Frontend/Backend Web Dev",
    bg: "#4dd0e1",
  },
  {
    icon: FaCube,
    name: "Blockchain",
    description: "TON Blockchain, Smart Contracts",
    bg: "#7e57c2",
  },
   {
    icon: FaBrain,
    name: "AI & Machine Learning",
    description: "Research Interest, Data Analysis (Pandas, Scikit-learn)",
    bg: "#aed581",
  },
];

const expertiseDescription = [
  "I build robust and efficient software solutions, specializing in backend development with C++ and Python. My experience includes designing high-performance systems, creating custom libraries, and developing scalable RESTful APIs using frameworks like Flask.",
  "Comfortable across the stack, I leverage JavaScript (including React Native for mobile) to create engaging user interfaces and complete applications. I'm passionate about exploring cutting-edge technologies, demonstrated by my work with TON blockchain and my ongoing research into AI/ML applications.",
  "I focus on writing clean, optimized, and maintainable code, utilizing tools like Docker and Git for streamlined workflows and deployment."
];

const toolIcons = [
    { icon: FaGitAlt, label: "Git" },
    { icon: FaDocker, label: "Docker" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: FaLinux, label: "Linux" },
];

const Skills = () => {
  return (
    <section className={css.wrapper}>
        <a className="anchor" id="skills"></a>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>

            <div className={css.leftSide}>
                {
                    skillHighlights.map((skill, i) => {
                        const IconComponent = skill.icon;
                        return (
                            <motion.div variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)} className={css.exp} key={i}>
                                <div style={{ background: skill.bg }} className="flexCenter">
                                    {IconComponent && <IconComponent size={25} color="white" />}
                                </div>
                                <div>
                                    <span>{skill.name}</span>
                                    <span className='secondaryText'>{skill.description}</span>
                                </div>
                            </motion.div>
                        );
                    })
                }
            </div>

            <motion.div
                variants={textVariant(0.5)}
                className={css.rightSide}>

                <span className='primaryText'>My Core Skills & Focus</span>
                {expertiseDescription.map((paragraph, i) => (
                    <p className='secondaryText' key={i}>{paragraph}</p>
                ))}

                <div className={css.toolsSection}>
                    <h3 className='primaryTextSmall'>Key Tools & Concepts</h3>
                    <div className={css.toolIconsContainer}>
                        {toolIcons.map((tool, i) => (
                           <div className={css.toolIconItem} key={i} title={tool.label}> 
                               <tool.icon size={28} />
                           </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
  );
}

export default Skills;
