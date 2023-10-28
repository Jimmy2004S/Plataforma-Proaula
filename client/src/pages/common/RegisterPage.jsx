import "../../assets/styles/register-page.scss";
import { useState } from "react";
import { useCreateUserMutation } from "../../api/apiSlice";
import {Link} from 'react-router-dom'

export const RegisterPage = () => {
  const [userData, setUserData] = useState({
    codigo: "",
    nombre: "",
    apellidos: "",
    email: "",
    rol_id: "",
    password: "",
    departamento: "",
    semestre: "",
    carrera: "",
    estados: "2",
  });

  const [createUser] = useCreateUserMutation();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createUser(userData);
      console.log("exito", response);
      console.log(userData);
      setUserData({
        codigo: "",
        nombre: "",
        apellidos: "",
        email: "",
        rol_id: "",
        password: "",
        departamento: "",
        semestre: "",
        carrera: "",
        estados: "2",
      });
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div className="flex-container">
      <div className="container">
        <h2 className="container__title">¡Bienvenido!</h2>
        <p className="container__text">
          Completa este formulario para empezar a subir tus proyectos y
          interactuar con tus proyectos favoritos.
        </p>
      </div>
      <form method="post" className="form" onSubmit={handleSubmit}>
        <h3 className="form__title">Crea una cuenta</h3>
        <p className="form__text">
          ¿Ya tienes una cuenta? <Link to="/">Inicia sesion</Link>
        </p>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={userData.nombre}
          className="form__input"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="apellidos"
          value={userData.apellidos}
          placeholder="Apellido"
          className="form__input"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="codigo"
          value={userData.codigo}
          placeholder="Codigo"
          className="form__input form__input--block"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          placeholder="Correo"
          className="form__input form__input--block"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          placeholder="Contraseña"
          className="form__input form__input--block"
          required
          onChange={handleChange}
        />
        <label htmlFor="profesor" className="form__label">
          <input
            type="radio"
            name="rol_id"
            id="profesor"
            className="form__radio"
            value="3"
            onChange={handleChange}
          />
          Profesor
        </label>
        <label htmlFor="estudiante" className="form__label">
          <input
            type="radio"
            name="rol_id"
            id="estudiante"
            className="form__radio"
            value="2" onChange={handleChange}
          />
          Estudiante
        </label>
        <fieldset className="form__fieldset">
          <h4 className="fieldset__title">Profesor</h4>
          <select
            name="departamento"
            className="form__select form__select--block"
          >
            <option disabled>Departamento</option>
          </select>
        </fieldset>
        <fieldset className="form__fieldset">
          <h4 className="fieldset__title">Estudiante</h4>
          <select name="carrera" className="form__select" onChange={handleChange}>
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
          <select name="semestre" className="form__select" onChange={handleChange}>
            <option disabled>Semestre</option>
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
        </fieldset>
        <input type="submit" value="Registrarse" className="form__button" />
      </form>
    </div>
  );
};
