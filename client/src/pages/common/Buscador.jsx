import { Nav } from "../../components/students/Nav";
import styles from "../../assets/styles/users/Buscador.module.scss";
import { ProjectList } from "../../components/project/ProjectList";
import { FaSearch } from "react-icons/fa";
import { Return } from "../admin/Return";
import Footer from "../../components/common/Footer";
import { useSelector } from "react-redux";
import { useFilter } from "../../api/apiSlice";
import { useState } from "react";
import { ProjectCard } from "../../components/project/ProjectCard";

export const Buscador = () => {
  const rol = useSelector((state) => state.user.user.rol_id);
  // const [busqueda, setbusqueda] = useState("");
  // const { data, isLoading, isError, error, refetch } = useFilter(busqueda);
  // console.log(data)
  return (
    <div>
      {rol === 1 && <Return />}
      {rol === 2 && <Nav />}
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <input
            type="text"
            name="busqueda"
            placeholder="Buscar"
            className={styles.form__input}
            onChange={(e) => setbusqueda(e.target.value)}
          />
          <button
            type="button"
            className={styles.form__button}
          >
            <FaSearch />
          </button>
        </form>
      </div>
      <ProjectList/>
      <Footer />
    </div>
  );
};
