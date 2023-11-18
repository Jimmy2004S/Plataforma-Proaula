import { useState } from "react";
import { Nav} from "../../components/students/Nav";
import styles from "../../assets/styles/users/Buscador.module.scss"
import { ProjectList } from "../../components/project/ProjectList";
import { IoFilter } from "react-icons/io5";
import { Return } from "../admin/Return";
import Footer from "../../components/common/Footer";

export const Buscador = () => {
  const [rol_id, setrol_id] = useState(2);

  return (
    <div>
      {rol_id === 1 && <Return/>}
      {rol_id === 2 && <Nav/>}
      <div className={styles.wrapper}>
        <form className={styles.form}>
        <select name="carrera" className={styles.form__select}>
            <option disabled>Carrera</option>
            <option value="Carrera 1">
              Tec. Sistemas De Gestión De Calidad
            </option>
            <option value="Carrera 2">
              Tec. Desarrollo De Sistemas De Información Y De Software
            </option>
            <option value="carrera 3">
              Tec. Gestión De Servicios Turísticos Y Hoteleros
            </option>
            <option value="carrera 4">
              Licenciatura En Bilingüismo Con Énfasis En Inglés
            </option>
            <option value="carrera 5">Contaduría Pública</option>
            <option value="carrera 6">Administración De Empresas</option>
            <option value="carrera 7">Derecho</option>
            <option value="carrera 8">Ingeniería Industrial</option>
            <option value="carrera 9">Ingeniería De Sistemas</option>
            <option value="carrera 10">
              Administración De Empresas Turísticas Y Hoteleras
            </option>
          </select>
            <select name="" id="" className={styles.form__select}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button type="button" className={styles.form__button}><IoFilter /></button>
        </form>
      </div>
      <ProjectList/>
      <Footer/>
    </div>
  );
};
