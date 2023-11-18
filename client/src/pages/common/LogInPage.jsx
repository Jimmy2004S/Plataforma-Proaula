import "../../assets/styles/login-page.scss";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess} from "../../features/users/userSlice";
import { useLoginUserMutation } from "../../api/apiSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD


=======
//cambiar data por userData
>>>>>>> 834060598ed6ef8c64d6151bd9abdf44098c2a62
export const LogInPage = () => {
  const [userCode, setUserCode] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [login] = useLoginUserMutation();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ userCode, password });
      console.log("Exito", response);
      if (response.data.token) {
        const user = response.data.user;
        const token = response.data.token;

        dispatch(
          loginSuccess({
            user: { rol_id: response.data.rol_id},
            token: response.data.token,
          })
        );

        console.log("Usuario:", user);
        console.log("Token:", token);

        if (user.rol_id === 1) {
          navigate('/indexAdmin');
        } else if (user.rol_id === 2) {
          navigate('/indexStudents');
        } else if (user.rol_id === 3) {
          navigate('/indexProfessors');
        }
      console.log(response.data)
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
        <label htmlFor="codigo" className="Form__label">
          Email
        </label>
        <input type="text" name="email" id="codigo" className="Form__input" value={userCode} onChange={(e)=>{setUserCode(e.target.value)}}/>
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




