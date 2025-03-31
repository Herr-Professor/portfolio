import React from "react";
import { motion } from "framer-motion";
import css from "./Projects.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";
import { FaLink, FaGithub } from "react-icons/fa";

const mobileVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const projectData = [
  {
    title: "Resume Optimizer",
    description: "A full-stack web application providing AI-driven feedback to help users improve their resumes.",
    image: "./resume-opt.jpg",
    techStack: ["Python", "Flask", "JavaScript", "React", "AI/ML"],
    liveUrl: "https://resumeoptimizer.io",
    githubUrl: "https://github.com/Herr-Professor/res-server",
    status: "Live",
  },
  {
    title: "TON Escrow Service Bot",
    description: "Telegram bot facilitating secure peer-to-peer escrow services directly on the TON blockchain.",
    image: "./ton-escrow.jpeg",
    techStack: ["Python", "TON Blockchain", "Telegram Bot API"],
    liveUrl: "https://t.me/qservice_1_bot",
    githubUrl: "https://github.com/Herr-Professor/q",
    status: "Active Bot",
  },
  {
    title: "MathGym Mobile App",
    description: "A React Native mobile application designed for practicing and improving mathematical skills (MVP developed).",
    image: "./mathgym.png",
    techStack: ["React Native", "JavaScript", "Mobile UI/UX"],
    liveUrl: null,
    githubUrl: "https://github.com/Herr-Professor/MathGym",
    status: "MVP on GitHub",
  },
  {
    title: "Custom C++ Memory Allocator",
    description: "High-performance, thread-safe memory allocator with multiple strategies, built to optimize C++ application throughput.",
    image: "./memalloc.jpg",
    techStack: ["C++", "Memory Management", "Performance"],
    liveUrl: null,
    githubUrl: "https://github.com/Herr-Professor/memory_allocator",
    status: "Library",
  },
];


const Projects = () => { // Renamed component
  return (
    <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>

        {/* Updated anchor ID */}
        <a className="anchor" id="projects"></a>

        <div className={`innerWidth flexCenter ${css.container}`}>

            {/* Heading Section */}
            <motion.div variants={textVariant(0.4)} className={`flexCenter ${css.heading}`}>
                <div>
                    <span className="primaryText">Featured Projects</span>
                    <p style={{marginTop: "10px"}}>A selection of my recent work.</p>
                </div>
                
                <a href="https://github.com/Herr-Professor" target="_blank" rel="noopener noreferrer" className={css.exploreLink}>
                    <span className="secondaryText">Explore More on GitHub</span>
                    <FaGithub style={{ marginLeft: '8px' }} />
                </a>
            </motion.div>

            <div className={`flexCenter ${css.projectsGrid}`}>
    {projectData.map((project, i) => (
        <motion.div
            variants={window.innerWidth <= 768 ? mobileVariant : fadeIn("up", "tween", (i * 0.1) + 0.5, 0.6)}
            className={css.projectCard}
            key={project.title}
        >
            {/* Add priority and loading attributes to image */}
            <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className={css.projectImage}
                loading="lazy"
                decoding="async"
            />
                        <div className={css.cardContent}>
                           <h3 className={css.projectTitle}>{project.title}</h3>
                           {project.status && <span className={css.projectStatus}>{project.status}</span>}
                           <p className={css.projectDescription}>{project.description}</p>

                           <div className={css.techStackContainer}>
                               {project.techStack.map(tech => (
                                   <span key={tech} className={css.techTag}>{tech}</span>
                               ))}
                           </div>

                           <div className={css.projectLinks}>
                               {project.liveUrl && (
                                   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={css.projectLinkButton}>
                                       <FaLink size={14}/> Live
                                   </a>
                               )}
                               {project.githubUrl && (
                                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={css.projectLinkButton}>
                                       <FaGithub size={14}/> View Code
                                   </a>
                               )}
                           </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.section>
  );
};

export default Projects;
