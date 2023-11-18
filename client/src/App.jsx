// importar react router-dom para las rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
//importar paginas de la aplicacion que se usaran en las rutas
import { RegisterPage } from "./pages/common/RegisterPage";
import { LogInPage } from "./pages/common/LogInPage";
import { IndexAdminPage } from "./pages/Admin/IndexAdminPage";
import { IndexStudentPage } from "./pages/students/IndexStudentsPage";
import { IndexProfessorPage } from "./pages/professors/IndexProfessorPage";
import { RegistroUsuariosPage } from "./pages/Admin/RegistroUsuariosPage";
import { ProjectFormPage } from "./pages/students/ProjectFormPage";
import { ProjectDetail } from "./pages/common/ProjectDetail";
import { Nav } from "./components/admin/Nav";
import { useSelector } from "react-redux";
import { Buscador } from "./pages/common/Buscador";

function App() {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const rol_id = useSelector((state) => state.user.user?.rol_id);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          {loggedIn && rol_id === "3" && (
            <Route path="/indexProfessors" element={<IndexProfessorPage />} />
          )}
          {/* `{loggedIn && rol_id === "2" && (
            <Route path="/indexStudents" element={<IndexStudentPage />} />
          )}` */}

          <Route path="/indexAdmin" element={<IndexAdminPage />} />
          <Route path="/users-list" element={<RegistroUsuariosPage />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/project-form" element={<ProjectFormPage />} />
          <Route path="/indexStudents" element={<IndexStudentPage />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/buscador" element={<Buscador />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Reportes = () => {
  return (
    <div className="wrapper">
      <Nav />
      <div>Reportes</div>
    </div>
  );
};

export default App;
