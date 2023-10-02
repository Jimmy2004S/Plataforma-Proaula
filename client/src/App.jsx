import { RegisterPage } from "./pages/RegisterPage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { RegistroUsuariosPage } from "./pages/Admin/RegistroUsuariosPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage/>}/>
          <Route path="/list-users" element={<RegistroUsuariosPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
