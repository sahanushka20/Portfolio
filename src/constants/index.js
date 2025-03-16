import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    postgresql,
    html,
    css,
    aws,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    foxmuffin,
    gssoc,
    stockanalysis,
    bgchanger,
    codestudio, 
    passgen,
  } from "../assets";
  

   
  
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
      title: "Software Development",
      icon: web,
    },
    {
      title: "Data Structures and Algorithms",
      icon: mobile,
    },
    {
      title: "Databases",
      icon: backend,
    },
    {
      title: "Cloud Technologies",
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
      name: "postgresql",
      icon: postgresql,
    },
    {
      name: "AWS",
      icon:  aws,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Contributor",
      company_name: "GirlScript Summer of Code",
      icon: gssoc,
      iconBg: "#FAF9F6",
      date: "May 2023 - August 2023",
      points: [
        "Actively contributed to multiple open-source frontend projects, enhancing user interfaces utilizing HTML, CSS, and JavaScript.",
        "Collaborated with a team of developers to design and implement new features, significantly improving project functionality. ",
        "Gained valuable knowledge and insights from experienced developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "FoxMuffin",
      icon: foxmuffin,
      iconBg: "#E6DEDD",
      date: "April 2024 - May 2024",
      points: [
        "Converted high-fidelity Figma designs into responsive, pixel-perfect websites using HTML, CSS, JavaScript, and React.js.",
        "Developed dynamic and reusable components to enhance functionality and user experience.",
        "Optimized websites for performance and cross-browser compatibility.",
        "Collaborated with designers and stakeholders to align development with project goals and design standards.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "CodeStudio",
      description:
        "Web-based platform that allows users to write, execute code in various languages and view outputs in real-time.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "pistonapi",
          color: "green-text-gradient",
        },
        {
          name: "monaco-editor",
          color: "pink-text-gradient",
        },
        {
          name: "chakraui",
          color: "blue-text-gradient",
        },
      ],
      image: codestudio,
      source_code_link: "https://github.com/sahanushka20/CodeStudio",
    },
    {
      name: "PassGEN",
      description:
        "A dynamic password generator that allows users to customize password length and character types for secure and strong password creation",
        tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        
      ],
      image: passgen,
      source_code_link: "https://github.com/sahanushka20/PasswordGenerator",
    },
    {
      name: "BG Changer",
      description:
      "A simple background changer that lets users switch background colors for a personalized visual experience.",
       tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
       
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: bgchanger,
      source_code_link: "https://github.com/sahanushka20/BackgroundChanger",
    },
    {
      name: "Stockysis",
      description:
        "A stock analysis dashboard that provides real-time stock price visualization, financial statements, and news insights for informed decision-making.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
       
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
        {
          name: "yfinance",
          color: "green-text-gradient",
        },
       
        {
          name: "alpha-vantage-api",
          color: "pink-text-gradient",
        },
      ],
      image: stockanalysis,
      source_code_link: "https://github.com/sahanushka20/Stock-Analysis",
    },
  ];
  
  export { services, technologies, experiences, projects };
  