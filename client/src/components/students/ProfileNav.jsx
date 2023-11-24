import { Link } from "react-router-dom";
// import styles from "../../assets/styles/users/Profile.module.scss"
export const ProfileNav = () => {
  return (
    <nav>
      <Link to="/perfil">Proyectos</Link>
      <Link to="/perfil-groups">Grupos</Link>
    </nav>
  )
}
