import styles from "../../assets/styles/users/Nav.module.scss";
import { useState } from "react";
import { useCreateProjectMutation } from "../../api/apiSlice";
export const ProjectForm = () => {

  const [projectDescription, setProjectDescription] = useState("");

  const [createProject] = useCreateProjectMutation();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await createProject(projectDescription);
      console.log("exito", response)
      setProjectDescription("");
    }catch(error){
      console.error(error);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.form__title}>Añade tu Proyecto</h2>
      <label className={styles.form__label}>Proyecto</label>
      <input type="file" name="project_file" className={styles.form__input}/>
      <label className={styles.form__label}>Documento</label>
      <input type="file" name="project_document" className={styles.form__input}/>
      <textarea
        name="descripcion"
        cols="30"
        rows="10"
        placeholder="Descripcion"
        value={projectDescription}
        className={styles.form__textarea}
        onChange={(e)=>{setProjectDescription(e.target.value)}}
      ></textarea>
      <input type="submit" value="Publicar" className={styles.form__button} />

    </form>
  );
};
