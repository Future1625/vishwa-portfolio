
import {
  logo,
  backend,
  // creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  express,
  python,
  TensorFlow,
  Sklearn,
  Pandas,
  numpy,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  Jarvis,
  klassroom,
  ConnectX
} from '../assets'
import acc from "../assets/company/acc.png";
import octanet from "../assets/company/octanet.png";


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
    title: "Python Developer",
    icon: web,
  },
  {
    title: "Machine Learning Enthusiast",
    icon: mobile,
  },
  {
    title: "web Developer",
    icon: backend,
  },
  // {
  //   title: "Ui UX Designer",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "scikit-learn",
    icon: Sklearn,
  },
  {
    name: "Tensorflow",
    icon: TensorFlow,
  },
  {
    name: "Pandas",
    icon: Pandas,
  },
  {
    name: "numpy",
    icon: numpy,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "OctaNet Services Pvt. Ltd.",
    icon: octanet,
    iconBg: "white",
    date: "Feb 2024 - Apr 2024",
    points: [
      "Designed and developed dynamic, responsive landing pages to enhance user engagement and functionality.",
      "Utilized HTML, CSS, and JavaScript to create visually appealing and intuitive web interfaces.",
      "Strengthened front-end development skills through hands-on experience with real-world applications.",
      "Improved attention to detail and UI design while contributing to meaningful web-based projects.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Applied Cloud Computing",
    icon: acc,
    iconBg: "white",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Working as an intern in the Digitalization Department focused on enhancing business processes through modern web technologies.",
      "Building responsive and user-friendly digital interfaces using HTML, CSS, JavaScript, and Tailwind CSS.",
      "Strengthening core frontend skills while gaining practical experience in scalable UI design.",
      "Understanding the role of modern web development in supporting organizational digital transformation initiatives.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was amazed by how smooth and responsive our landing page became after Vishwa worked on it. He truly understands what users want.",
    name: "Rohan Mehta",
    designation: "Marketing Head",
    company: "PixelKart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Vishwa didn’t just build our site—he made sure it reflected our brand perfectly. He’s detail-oriented and always delivers on time.",
    name: "Sneha Sharma",
    designation: "Co-founder",
    company: "CraftNest",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Thanks to Vishwa's optimization, our site now loads 2x faster. It’s helped us retain more users and boost conversions.",
    name: "Arjun Nair",
    designation: "Tech Lead",
    company: "TrendyTech",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Jarvis",
    description:
      "Jarvis is a smart desktop assistant built with Python that automates everyday tasks like opening apps, checking weather, playing music, sending emails, and more using voice commands. It's a personal productivity booster with a sleek terminal interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "speechRecognition",
        color: "green-text-gradient",
      },
      {
        name: "pyttsx3",
        color: "pink-text-gradient",
      },
      {
        name: "automation",
        color: "white-text-gradient",
      },
    ],
    image: Jarvis, // replace with your actual imported image
    source_code_link: "https://github.com/Future1625/Jarvis", 
  },
  {
    name: "Klassroom",
    description:
      "Klassroom is a full-featured Learning Management System (LMS) that enables smooth collaboration between students and mentors. It includes dashboards, a mentor–mentee system, certificate upload via Google Cloud, and organized class/timetable management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "googleCloud",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "white-text-gradient",
      },
    ],
    image: klassroom,
    source_code_link: "https://github.com/Future1625/Klassroom", 
  },
  {
    name: "ConnectX",
    description:
      "ConnectX is a platform that bridges professionals and learners through structured communication tools. It supports real-time chat, community discussions, and showcases developer profiles—ideal for mentorship and tech networking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: ConnectX,
    source_code_link: "hhttps://github.com/jadhavharshh/ConnectX",
  },
];


export { services, technologies, experiences, testimonials, projects };
