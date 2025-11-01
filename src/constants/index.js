import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  manish,
  mailarappa,
  ayush,
} from "../assets";
import { getImageUrl } from "../components/Works";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "React Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Python Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Senior Software Developer",
    company_name: "Softsensor.ai",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2025 - Present",
    points: [
      "Architecting and developing scalable, high-performance full-stack web applications for the Delivery Management System using React.js, Node.js, and modern JavaScript ecosystems.",
      "Leading design and technical discussions, collaborating with product managers, UI/UX designers, and cross-functional engineering teams to deliver robust, maintainable solutions.",
      "Driving front-end performance optimization, implementing responsive, accessible, and user-focused UI designs for a seamless user experience across devices.",
      "Reviewing and refactoring code to uphold engineering best practices, improving system efficiency, and mentoring junior developers to foster technical growth within the team.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Softsensor.ai",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2025",
    points: [
      "Designed, developed, and maintained scalable full stack web applications for a Delivery Management System using React.js, Node.js, and related technologies.",
      "Collaborated closely with designers, product managers, and cross-functional engineering teams to deliver high-quality, end-to-end product features.",
      "Implemented responsive and user-centric UI designs while ensuring seamless performance and cross-browser compatibility.",
      "Conducted thorough code reviews, shared best practices, and mentored team members to maintain code quality and system reliability.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Wipro",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Anubhab proved me wrong.",
    name: "Mailarappa Budhihal",
    designation: "Software Developer",
    image: mailarappa,
    company: "SoftSensor.ai",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Anubhab does.",
    name: "Manish Rawat",
    designation: "Software Developer",
    image: manish,
    company: "SoftSensor.ai",
  },
  {
    testimonial:
      "After Anubhab worked his magic on our website, we saw a 43% jump in traffic! His insights and optimizations made a huge difference. Honestly, we couldn’t be more grateful.",
    name: "Ayush Aryan",
    designation: "Software Developer",
    image: ayush,
    company: "TCS",
  },
];

const projects = [
  {
    name: "Weather App",
    description: "Weather app that can say the weather of your location",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: getImageUrl("projects/project.png"),
    source_code_link: "https://github.com/anubhabguha1999/Weather-app",
  },
  {
    name: "REDEFINE",
    description: "Refefine is a game that is made using React + Vite.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "vite", color: "green-text-gradient" },
    ],
    image: getImageUrl("projects/game.jpg"),
    source_code_link: "https://redefine-anubhab-guha.netlify.app/",
  },
  {
    name: "Speech Emotion Recognition",
    description:
      "Speech Emotion Recognition is a project that can detect the emotion of a person based on their speech",
    tags: [
      { name: "python", color: "green-text-gradient" },
      { name: "ml", color: "pink-text-gradient" },
    ],
    image: getImageUrl("projects/project2.jpg"),
    source_code_link:
      "https://github.com/anubhabguha1999/Speech-Emotion-Recognition",
  },
];

export { services, technologies, experiences, testimonials, projects };
