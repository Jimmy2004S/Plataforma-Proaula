export const IniciarSesionPage = () => {
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
      <div>
        <form method="post">
            <h3>Inicia Sesion</h3>
            <label htmlFor="">Codigo</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Contraseña</label>
            <input type="password" name="" id="" />
            <a href="">¿Olvidaste tu contraseña?</a>
            <input type="submit" value="Iniciar Sesion" />
            <p>¿No tienes cuenta? <a href="">Registrate</a></p>
        </form>
      </div>
    </div>
  );
};
