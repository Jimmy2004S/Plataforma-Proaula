import { ProjectCard } from "../../components/project/ProjectCard";
import { Nav } from "../../components/students/Nav";
import { CommentForm } from "../../components/comment/CommentForm";
import { CommentList } from "../../components/comment/CommentList";
import styles from "../../assets/styles/project/ProjectCard.module.scss"

export const ProjectDetail = () => {
  const project = {
    name: "Project 1",
    description:
      "This project aims to develop a mobile application for task management.",
  };
  return (
    <div>
      <Nav />
      <main className={styles.main}>
        <ProjectCard project={project} />
        <CommentList />
        <CommentForm />
      </main>
    </div>
  );
};
