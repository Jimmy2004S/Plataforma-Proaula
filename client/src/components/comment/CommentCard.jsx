import PropTypes from "prop-types";
import icon from "../../assets/images/default-icon.jpg";
import styles from "../../assets/styles/project/ProjectCard.module.scss";
export const CommentCard = ({ comment }) => {
  return (
    <div className={styles.commentCard}>
      <img
        src={icon}
        alt="icon de usuario"
        className={styles.commentCard__icon}
      />
      <div className={styles.wrapper}>
        <p className={styles.commentCard__textBold}>{comment.name}</p>
        <p className={styles.commentCard__textLight}>{comment.comment}</p>
      </div>
    </div>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }),
};
