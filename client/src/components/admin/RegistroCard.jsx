import defaultIcon from "../../assets/images/default-icon.jpg";
import { useDeleteUserMutation } from "../../api/apiSlice";
import PropTypes from 'prop-types';

export const RegistroCard = ({ user }) => {

  const [deleteUser] = useDeleteUserMutation();

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = async (id) =>{
    try{
      const result = await deleteUser(id);
      console.log("Usuario eliminado exitosamente: " + result);
    }catch (error){
      console.error("Error al eliminar usuario: " + error);
    }
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
          <p className="card__text--bold">{user.user_name}</p>
          <p className="card__text--light">{user.email}</p>
        </div>
      </div>
      <div className="card__container--right">
        <button
          type="button"
          className="card__button card__button--activate"
          onClick={() => {
            handleEdit(user.id);
          }}
        >
          Activar
        </button>
        <button
          type="button"
          className="card__button card__button--delete"
          onClick={() => {
            handleDelete(user.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

RegistroCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    user_name: PropTypes.string,
  })
}
