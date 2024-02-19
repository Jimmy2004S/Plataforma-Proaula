import { Nav } from "../../components/students/Nav";
import { ProfessorsNav } from "../../components/professors/ProfessorsNav";
import { ProfileCard } from "../../components/students/ProfileCard";
import { ProfileNav } from "../../components/students/ProfileNav";
import { useSelector } from "react-redux";
import { useGetUserProjectsQuery } from "../../api/apiSlice";
import { ProjectCard } from "../../components/project/ProjectCard";
import styles from "../../assets/styles/users/Profile.module.scss"

export const ProfilePage = () => {
  const rol = useSelector((state) => state.user.user.rol_id);

  const { data: projects, isLoading } = useGetUserProjectsQuery();

  if (isLoading) return <div>Loading...</div>;
  console.log(Array.isArray(projects))
  return (
    <>
      {rol === 2 && <Nav />}
      {rol === 3 && <ProfessorsNav />}
      <ProfileCard />
      {rol === 2 && <ProfileNav />}

      <div className={styles.wrapper}>
        {Array.isArray(projects) && projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>



      {/* {isError && <p>{JSON.stringify(error)}</p>} */}
    </>
  );
};
