import { Link } from "react-router-dom";
import styles from "../../assets/styles/users/Profile.module.scss"
export const ProfileNav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/perfil" className={styles.nav__link}>Proyectos</Link>
      <Link to="/perfil-groups" className={styles.nav__link}>Grupos</Link>
      <Link to="/project-form" className={styles.nav__link}>Agregar Proyecto</Link>
    </nav>
  )
}
