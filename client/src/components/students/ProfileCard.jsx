import styles from "../../assets/styles/users/Profile.module.scss";
import Icon from "../../assets/images/default-icon.jpg";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const ProfileCard = () => {
  const user = useSelector((state)=> state.user.user);
  return (
    <div className={styles.card}>
      <img src={Icon} alt="Icono por defecto" className={styles.card__icon} />
      <div className={styles.card__container}>
        <p className={styles.card__text}>{user.user_name}</p>
        <p className={styles.card__texItalic}>{user.email}</p>
        <p className={styles.card__descripcion}>{user.descripcion}</p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  user: PropTypes.shape({
    user_name: PropTypes.string,
    email: PropTypes.string,
    descripcion: PropTypes.string,
  }),
};
