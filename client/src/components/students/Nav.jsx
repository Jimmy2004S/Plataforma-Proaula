import { IoNotifications } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
import styles from '../../assets/styles/users/Nav.module.scss'
export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h3>Proyectos de aula</h3>
      <div className={styles.nav__container}>
        <button type="button" className={styles.nav__button}><IoNotifications /></button>
        <Link to="/indexStudents">Inicio</Link>
        <Link>Buscar</Link>
        <Link>Perfil</Link>
        <button type="button" className={styles.nav__button}><CiMenuKebab/></button>
      </div>
    </nav>
  );
};
