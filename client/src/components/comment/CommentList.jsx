import { CommentCard } from "./CommentCard";
import styles from "../../assets/styles/project/ProjectCard.module.scss"
export const CommentList = () => {
  const comments = [
    {
      name: "John Doe",
      comment: "Great project!",
      id: 1,
    },
    {
      name: "Jane Smith",
      comment: "Well done!",
      id: 2,
    },
    {
      name: "Mike Johnson",
      comment: "Impressive work.",
      id: 3,
    },
    {
      name: "Emily Davis",
      comment: "Needs improvement.",
      id: 4,
    },
    {
      name: "Chris Wilson",
      comment: "Excellent job!",
      id: 5,
    },
  ];

  return (
    <div className={styles.commentlist}>
      {comments.map((comment) => (
        <CommentCard comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
