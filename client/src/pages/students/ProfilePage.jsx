import { Nav } from "../../components/students/Nav";
import { ProfessorsNav } from "../../components/professors/ProfessorsNav";
import { ProfileCard } from "../../components/students/ProfileCard";
import { ProfileNav } from "../../components/students/ProfileNav";
import { useSelector } from "react-redux";
import { useGetUserProjectsQuery } from "../../api/apiSlice";
import { ProjectCard } from "../../components/project/ProjectCard";

export const ProfilePage = () => {
  const rol = useSelector((state)=> state.user.user.rol_id);
  const token = useSelector((state)=> state.user.token);
  console.log(token)

  const {data: projects, isError, isLoading, error} = useGetUserProjectsQuery()
 

  if (isLoading) return <div>Loading...</div>;

  else if (isError) return <div>Error: {error.message}</div>;
  
  return (
    <>
      {rol === 2 && <Nav />}
      {rol === 3 && <ProfessorsNav />}
      <ProfileCard/>
      {rol === 2 && <ProfileNav />}
      {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
      ))}
    </>
  );
};
