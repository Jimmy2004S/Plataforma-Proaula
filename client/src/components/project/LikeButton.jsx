import { AiFillHeart } from "react-icons/ai";
import styles from "../../assets/styles/project/ProjectCard.module.scss";
import { useState } from "react";

export const LikeButton = (id) => {
  const [isLiked, setIsLiked] = useState(false);

  //solicitud get para comprobar el estado del like con useEffect  

  const handleOnClick = () =>{
    if(isLiked === false){
        setIsLiked(true);
        //realizar solicitud post
    }else{
        setIsLiked(false);
        //realizar solicitud delete
    }
  }
  return (
    <button className={isLiked ? styles.card__likeButton_active : styles.card__likeButton_normal} onClick={()=>{handleOnClick(id)}}>
      <AiFillHeart />
    </button>
  );
};
