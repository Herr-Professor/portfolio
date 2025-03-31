import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";

export const MyExpertise = [
  "Highly skilled and motivated Frontend/DevOps Engineer with 5 years of experience in building scalable and responsive web applications.",
   "Proficient in HTML, CSS, JavaScript, TypeScript, React, Vue.js, Node.js, React Native, and DevOps tools such as Jenkins, Docker, Kubernetes, and AWS.", "Proven track record of delivering high-quality code and implementing efficient DevOps processes.",
];

 export const workExp = [
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
