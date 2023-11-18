import styles from "../../assets/styles/project/ProjectCard.module.scss";
import { FaCommentAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const CommentButton = () => {

    const navigate = useNavigate();
  const handleOnClick = ()=>{
    navigate("/project-detail");
  }

  return (
    <button
      type="button"
      className={styles.card__commentButton}
      onClick={handleOnClick}
    >
      <FaCommentAlt />
    </button>
  );
};
