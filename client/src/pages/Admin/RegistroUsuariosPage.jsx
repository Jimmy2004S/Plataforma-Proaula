//import { useState } from "react"
import Footer from "../../components/common/Footer";
import Nav from "../../components/admin/Nav";
import { RegistroCard } from "../../components/admin/RegistroCard";
import "../../assets/styles/admin/registerpage.scss";

export const RegistroUsuariosPage = () => {
  // const [usuarios, setUsuarios] = useState([])
  const usuario = {
    nombre: "John Doe",
    codigo: "12345",
  };
  return (
    <>
      <div className="flex-container">
        <Nav />
        <main className="main">
          <h2 className="main__title">Usuarios</h2>
          {/* {usuarios.map(usuario =>(<RegistroCard key={usuario.codigo}/>))} */}
          <RegistroCard usuario={usuario} />
          <RegistroCard usuario={usuario} />
          <RegistroCard usuario={usuario} />
          <RegistroCard usuario={usuario} />
          <RegistroCard usuario={usuario} />
          <RegistroCard usuario={usuario} />
        </main>
      </div>
      <Footer />
    </>
  );
};
