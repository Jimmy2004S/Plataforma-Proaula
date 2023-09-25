import { IoNotifications, IoPeople, IoSearchSharp, IoLogOut } from "react-icons/io5";
import { GoAlertFill } from "react-icons/go";
import '../../assets/styles/admin/nav.scss'

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__container nav__container--left">
        <h3>Proyectos de aula</h3>
      </div>
      <div className="nav__container nav__container--right">
        <button className="nav__btn-notification"><IoNotifications/> Notificaciones</button>
        <a href="" className="nav__link"><IoPeople/> Registros</a>
        <a href="" className="nav__link"><GoAlertFill/> Reportes</a>
        <a href="" className="nav__link"><IoSearchSharp/> Buscar</a>
        <button className="nav__btn-menu"><IoLogOut/> Cerrar Sesion</button>
      </div>
    </nav>
  )
}

export default Nav