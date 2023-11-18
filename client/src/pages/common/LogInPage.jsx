import "../../assets/styles/login-page.scss";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess} from "../../features/users/userSlice";
import { useLoginUserMutation } from "../../api/apiSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [login] = useLoginUserMutation();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await login({ email, password });
      if (response.data.token) {
        const userRol = response.data.data.rol_id;

        dispatch(
          loginSuccess({
            user: response.data.data,
            token: response.data.token,
          })
        );

        if (userRol === 1) {
          navigate('/indexAdmin');
        } else if (userRol.rol_id === 2) {
          navigate('/indexStudents');
        } else if (userRol.rol_id === 3) {
          navigate('/indexProfessors');
        }
      } else {
        console.error("Error al iniciar sesion", response.data.error);
      }
    } catch (error) {
    console.log("Enviar")
      console.error("Error: ", error);
    }
  };
  
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
      <form method="post" className="Form" onSubmit={handleLogin}>
        <h3 className="Form__title">Inicia Sesion</h3>
        <label htmlFor="email" className="Form__label">
          Email
        </label>
        <input type="text" name="userCode" id="email" className="Form__input" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label htmlFor="contrasenia" className="Form__label">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="contrasenia"
          className="Form__input"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <Link to="/recuperar-contrasenia" className="Form__link">
          ¿Olvidaste tu contraseña?
        </Link>
        <input type="submit" value="Iniciar Sesion" className="Form__button" />
        <p>
          ¿No tienes cuenta?{" "}
          <Link to="/register-page" className="Form__link--blue">
            Registrate
          </Link>
        </p>
      </form>
    </div>
  );
};




