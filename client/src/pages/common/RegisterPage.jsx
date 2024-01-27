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
        password: "",
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
          type="number"
          name="codigo"
          value={userData.codigo}
          placeholder="Codigo"
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
        
        <input type="submit" value="Registrarse" className="form__button" />
      </form>
    </div>
  );
};
