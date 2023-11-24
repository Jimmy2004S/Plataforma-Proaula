import ProjectCover from "../../assets/images/ProjectCover.png";
import styles from "../../assets/styles/project/ProjectCard.module.scss";
import PropTypes from 'prop-types';
import { LikeButton } from "./LikeButton";
import { CommentButton } from "../comment/CommentButton"

export const ProjectCard = ({project}) => {
  return (
    <div className={styles.card}>
      <img src={ProjectCover} className={styles.card__img} />
      <p className={styles.card__description}>
        {project.descripcion}
      </p>
      <LikeButton id={project.id}/>
      <CommentButton/>
    </div>
  );
};

ProjectCard.propTypes={
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        descripcion: PropTypes.string,
    })
}