// importar react router-dom para las rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importar paginas de la aplicacion que se usaran en las rutas
import { RegisterPage } from "./pages/common/RegisterPage";
import { LogInPage } from "./pages/common/LogInPage";
import { IndexAdminPage } from "./pages/Admin/IndexAdminPage";
import { IndexStudentPage } from "./pages/students/IndexStudentsPage";
import { IndexProfessorPage } from "./pages/professors/IndexProfessorPage";
import { RegistroUsuariosPage } from "./pages/Admin/RegistroUsuariosPage";
import { Nav } from "./components/admin/Nav";


function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/indexAdmin" element={<IndexAdminPage />} />
          <Route path="/indexStudent" element={<IndexStudentPage />} />
          <Route path="/indexProfessor" element={<IndexProfessorPage />} />
          <Route path="/users-list" element={<RegistroUsuariosPage />} />
          <Route path="/reportes" element={<Reportes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Reportes = () => {
  return (
    <div className="wrapper">
      <Nav/>
      <div>Reportes</div>
    </div>
  );
};

export default App;
