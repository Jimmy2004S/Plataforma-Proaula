import PropTypes from "prop-types";
import defaultIcon from "../../assets/images/default-icon.jpg";

export const RegistroCard = ({ usuario }) => {
  return (
    <div className="card">
      <div className="card__container--left">
        <img
          src={defaultIcon}
          alt="imagen por defecto"
          className="card__image"
        />
        <div className="card__info">
          <p className="card__text--bold">{usuario.nombre}</p>
          <p className="card__text--light">{usuario.codigo}</p>
        </div>
      </div>
      <div className="card__container--right">
        <button type="button" className="card__button card__button--activate">
          Activar
        </button>
        <button type="button" className="card__button card__button--delete">
          Eliminar
        </button>
      </div>
    </div>
  );
};

RegistroCard.propTypes = {
  usuario: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    codigo: PropTypes.number.isRequired,
  }).isRequired,
};
