import PropTypes from "prop-types";
import defaultIcon from "../../assets/images/default-icon.jpg";

export const RegistroCard = ({ user }) => {

  const handleEdit = (id) =>{
    console.log(id);
  }

  const handleDelete = (id) =>{
    console.log(id);
  }
  return (
    <div className="card">
      <div className="card__container--left">
        <img
          src={defaultIcon}
          alt="imagen por defecto"
          className="card__image"
        />
        <div className="card__info">
          <p className="card__text--bold">{user.nombre}</p>
          <p className="card__text--light">{user.codigo}</p>
        </div>
      </div>
      <div className="card__container--right">
        <button type="button" className="card__button card__button--activate" onClick={()=>{handleEdit(user.id)}}>
          Activar
        </button>
        <button type="button" className="card__button card__button--delete" onClick={()=>{handleDelete(user.id)}}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

