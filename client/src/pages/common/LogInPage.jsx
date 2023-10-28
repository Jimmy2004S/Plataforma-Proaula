import "../../assets/styles/login-page.scss";
import { Link } from "react-router-dom";

export const LogInPage = () => {
  return (
    <div className="flex-container">
      <div className="container">
        <h2 className="container__title">¡Bienvenido otra vez!</h2>
        <p className="container__text">
          Estamos encantados de tenerte de regreso. Por favor, inicia sesión
          para acceder a tu cuenta y continuar explorando todo lo que tenemos
          para ofrecerte.
        </p>
      </div>
      <form method="post" className="Form">
        <h3 className="Form__title">Inicia Sesion</h3>
        <label htmlFor="codigo" className="Form__label">Codigo</label>
        <input type="text" name="" id="codigo" className="Form__input" />
        <label htmlFor="contrasenia" className="Form__label">Contraseña</label>
        <input
          type="password"
          name=""
          id="contrasenia"
          className="Form__input"
        />
        <Link to="/recuperar-contrasenia" className="Form__link">¿Olvidaste tu contraseña?</Link>
        <input type="submit" value="Iniciar Sesion" className="Form__button" />
        <p>
          ¿No tienes cuenta? <Link to="/register-page" className="Form__link--blue">Registrate</Link>
        </p>
      </form>
    </div>
  );
};
