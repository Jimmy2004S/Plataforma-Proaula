//import { useState } from "react"
import Footer from "../../components/common/Footer";
import Nav from "../../components/admin/Nav";
import { RegistroCard } from "../../components/admin/RegistroCard";
import "../../assets/styles/admin/registerpage.scss";
import { useGetUserQuery } from "../../api/apiSlice";

export const RegistroUsuariosPage = () => {
  const { data: users, isError, isLoading, error } = useGetUserQuery();
  
  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;
  
  return (
    <>
      <div className="wrapper">
        <Nav />
        <main className="main">
          <h2 className="main__title">Usuarios</h2>
          {users.map(user =>(<RegistroCard key={user.id} user={user}/>))}
        </main>
      </div>
      <Footer />
    </>
  );
};
