import { ProjectCard } from "../../components/project/ProjectCard";
import styles from "../../assets/styles/users/IndexStudent.module.scss"

export const ProjectList = () => {
  const projects = [
    {
      name: "Project 1",
      descripcion:
        "This project aims to develop a mobile application for task management.",
      id: 1,
    },
    {
      name: "Project 2",
      descripcion:
        "The goal of this project is to create a web-based platform for online shopping.",
      id: 2,
    },
    {
      name: "Project 3",
      descripcion:
        "This project focuses on building a machine learning model for sentiment analysis.",
      id: 3,
    },
    {
      name: "Project 4",
      descripcion:
        "The objective of this project is to design a database management system for a small business.",
      id: 4,
    },
    {
      name: "Project 5",
      descripcion:
        "This project involves developing a virtual reality game for educational purposes.",
      id: 5,
    },
    {
      name: "Project 6",
      descripcion:
        "The aim of this project is to implement a chatbot using natural language processing techniques.",
      id: 6,
    },
    {
      name: "Project 7",
      descripcion:
        "This project aims to create a recommendation system for personalized movie suggestions.",
      id: 7,
    },
    {
      name: "Project 8",
      descripcion:
        "The goal of this project is to design and build an autonomous robot for warehouse operations.",
      id: 8,
    },
    {
      name: "Project 9",
      descripcion:
        "This project focuses on developing a web application for online food delivery.",
      id: 9,
    },
    {
      name: "Project 10",
      descripcion:
        "The objective of this project is to analyze and visualize social media data for marketing insights.",
      id: 10,
    },
    {
      name: "Project 11",
      descripcion:
        "This project involves building a secure authentication system using blockchain technology.",
      id: 11,
    },
    {
      name: "Project 12",
      descripcion:
        "The aim of this project is to develop a computer vision algorithm for object detection.",
      id: 12,
    },
    {
      name: "Project 13",
      descripcion:
        "This project aims to create a virtual reality simulation for surgical training.",
      id: 13,
    },
    {
      name: "Project 14",
      descripcion:
        "The goal of this project is to design and implement a smart home automation system.",
      id: 14,
    },
    {
      name: "Project 15",
      descripcion:
        "This project focuses on developing a mobile app for language learning.",
      id: 15,
    },
    {
      name: "Project 16",
      descripcion:
        "The objective of this project is to build a recommendation system for personalized music playlists.",
      id: 16,
    },
    {
      name: "Project 17",
      descripcion:
        "This project involves designing and prototyping a renewable energy monitoring system.",
      id: 17,
    },
    {
      name: "Project 18",
      descripcion:
        "The aim of this project is to develop a web-based platform for online event management.",
      id: 18,
    },
    {
      name: "Project 19",
      descripcion:
        "This project aims to create a machine learning model for predicting stock market trends.",
      id: 19,
    },
    {
      name: "Project 20",
      descripcion:
        "The goal of this project is to design and build a self-driving car prototype.",
      id: 20,
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
