
import { Nav} from "../../components/students/Nav";
import styles from "../../assets/styles/users/Buscador.module.scss"
import { ProjectList } from "../../components/project/ProjectList";
import { FaSearch } from "react-icons/fa";
import { Return } from "../admin/Return";
import Footer from "../../components/common/Footer";
import { useSelector } from "react-redux";

export const Buscador = () => {
  const rol = useSelector((state)=> state.user.user.rol_id);
  return (
    <div>
      {rol === 1 && <Return/>}
      {rol === 2 && <Nav/>}
      <div className={styles.wrapper}>
        <form className={styles.form}>
            <input type="text" name="busqueda" placeholder="Buscar" className={styles.form__input}/>
            <button type="button" className={styles.form__button}><FaSearch /></button>
        </form>
      </div>
      <ProjectList/>
      <Footer/>
    </div>
  );
};
