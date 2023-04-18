import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Development",
    projects: 20,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 5,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "DevOps Engineering",
    projects: 3,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const MyExpertise = [
  "Highly skilled and motivated Frontend/DevOps Engineer with 5 years of experience in building scalable and responsive web applications.",
   "Proficient in HTML, CSS, JavaScript, TypeScript, React, Vue.js, Node.js, React Native, and DevOps tools such as Jenkins, Docker, Kubernetes, and AWS.", "Proven track record of delivering high-quality code and implementing efficient DevOps processes.",
];

export const workExp = [
  {
    place: "Resavation",
    tenure: "Mar. 2022 - till date",
    role: "DevOps Engineer",
    detail: "A DevOps Engineer who manages the deployment process for Resavation using Jenkins, Docker and K8s. Maintained and Updated infrastructure on AWS using Terraform.",
  },
  {
    place: "Resavation",
    tenure: "Sept. 2020 - Feb. 2022",
    role: "Frontend Engineer",
    detail: "Developed and maintained responsive web applications using React and Vue.js",
  },
  {
    place: "Ultra Cloud Technologies",
    tenure: "Aug. 2017 - Dec. 2019",
    role: "Frontend Developer",
    detail: "Translated design mockups into fully functional and high-performing web pages using HTML, CSS and JavaScript. Implemented front-end features to integrate with our back-end services.",
  },
];


export const comments = [
  {
    name: "React",
    comment:
      "I have used React extensively to build robust and scalable web applications. React is my preferred framework due to its component-based architecture, which allows me to easily create reusable UI elements that can be easily integrated into different parts of an application.",
    img: "./React.png",
  },
  {
    name: "Kubernetes",
    comment:
      "I have utilized Kubernetes to automate the deployment, scaling, and management of containerized applications across multiple environments, including development, staging, and production.",
    img: "./kubernetes.jpg",
  },
  {
    name: "React Native",
    comment:
      "I have extensive experience in integrating React Native with other technologies such as Redux, GraphQL, and Firebase to build complex mobile applications. This has allowed me to develop feature-rich and highly-functional mobile applications that meet the needs of clients across various industries.",
    img: "./React.png",
  },
  {
    name: "Docker",
    comment:
      "I have used Docker extensively for containerizing applications and deploying them across different environments, including development, testing, and production. Docker's flexibility and portability have allowed me to streamline the deployment process and ensure consistency across environments, saving time and effort for both development and operations teams.",
    img: "./Docker.png",
  },
  {
    name: "Git",
    comment:
      "I use Git to collaborate with other developers on a team. We regularly pull changes from the main branch and merge our work to ensure that everyone is working on the latest version of the codebase. Git has been invaluable in enabling us to work together effectively, even when we are working remotely.",
    img: "./Git.png",
  },
  {
    name: "Tailwind CSS",
    comment:
      "I have utilized TailwindCss extensively in many of my projects. It has become my go-to CSS framework due to its flexibility, simplicity, and ability to speed up my development process. I appreciate how TailwindCss provides a set of pre-defined classes that I can use to easily and quickly style my web pages.",
    img: "./tail.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
