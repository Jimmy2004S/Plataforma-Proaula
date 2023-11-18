import { ProjectCard } from "../../components/project/ProjectCard";
import styles from "../../assets/styles/users/IndexStudent.module.scss"

export const ProjectList = () => {
  const projects = [
    {
      name: "Project 1",
      description:
        "This project aims to develop a mobile application for task management.",
      id: "1",
    },
    {
      name: "Project 2",
      description:
        "The goal of this project is to create a web-based platform for online shopping.",
      id: "2",
    },
    {
      name: "Project 3",
      description:
        "This project focuses on building a machine learning model for sentiment analysis.",
      id: "3",
    },
    {
      name: "Project 4",
      description:
        "The objective of this project is to design a database management system for a small business.",
      id: "4",
    },
    {
      name: "Project 5",
      description:
        "This project involves developing a virtual reality game for educational purposes.",
      id: "5",
    },
    {
      name: "Project 6",
      description:
        "The aim of this project is to implement a chatbot using natural language processing techniques.",
      id: "6",
    },
    {
      name: "Project 7",
      description:
        "This project aims to create a recommendation system for personalized movie suggestions.",
      id: "7",
    },
    {
      name: "Project 8",
      description:
        "The goal of this project is to design and build an autonomous robot for warehouse operations.",
      id: "8",
    },
    {
      name: "Project 9",
      description:
        "This project focuses on developing a web application for online food delivery.",
      id: "9",
    },
    {
      name: "Project 10",
      description:
        "The objective of this project is to analyze and visualize social media data for marketing insights.",
      id: "10",
    },
    {
      name: "Project 11",
      description:
        "This project involves building a secure authentication system using blockchain technology.",
      id: "11",
    },
    {
      name: "Project 12",
      description:
        "The aim of this project is to develop a computer vision algorithm for object detection.",
      id: "12",
    },
    {
      name: "Project 13",
      description:
        "This project aims to create a virtual reality simulation for surgical training.",
      id: "13",
    },
    {
      name: "Project 14",
      description:
        "The goal of this project is to design and implement a smart home automation system.",
      id: "14",
    },
    {
      name: "Project 15",
      description:
        "This project focuses on developing a mobile app for language learning.",
      id: "15",
    },
    {
      name: "Project 16",
      description:
        "The objective of this project is to build a recommendation system for personalized music playlists.",
      id: "16",
    },
    {
      name: "Project 17",
      description:
        "This project involves designing and prototyping a renewable energy monitoring system.",
      id: "17",
    },
    {
      name: "Project 18",
      description:
        "The aim of this project is to develop a web-based platform for online event management.",
      id: "18",
    },
    {
      name: "Project 19",
      description:
        "This project aims to create a machine learning model for predicting stock market trends.",
      id: "19",
    },
    {
      name: "Project 20",
      description:
        "The goal of this project is to design and build a self-driving car prototype.",
      id: "20",
    },
  ];
  return (
    <section className={styles.section}>
      <h3 className={styles.section__title}>Proyectos</h3>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};
