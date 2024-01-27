import styles from "../../assets/styles/users/Nav.module.scss";
export const CommentForm = () => {
  return (
    <form className={styles.form}>
        <textarea name="comentario" id="" cols="30" rows="10" placeholder="Comentario" className={styles.form__textarea}>

        </textarea>
        <input type="submit" value="Comentar" className={styles.form__button}/>
    </form>
  )
}
