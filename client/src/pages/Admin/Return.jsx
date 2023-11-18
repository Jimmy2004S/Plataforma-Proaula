import { Link } from "react-router-dom"
import { IoReturnUpBack } from "react-icons/io5";
import styles from "../../assets/styles/users/Nav.module.scss"
export const Return = () => {
  return (
    <nav className={styles.nav}>
        <Link to="/indexAdmin"><IoReturnUpBack /></Link>
    </nav>
  )
}
