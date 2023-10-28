// importar react router-dom para las rutas
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//importar paginas de la aplicacion que se usaran en las rutas
import { RegisterPage } from "./pages/common/RegisterPage"
import { LogInPage } from "./pages/common/LogInPage"
import {IndexAdminPage} from './pages/Admin/IndexAdminPage'
import { IndexStudentPage } from './pages/students/IndexStudentsPage'
import { IndexProfessorPage } from './pages/professors/IndexProfessorPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage/>}/>
          <Route path="/register-page" element={<RegisterPage/>}/>
          <Route path='/indexAdmin' element={<IndexAdminPage/>}/>
          <Route path='/indexStudent' element={<IndexStudentPage/>}/>
          <Route path='/indexProfessor' element={<IndexProfessorPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
