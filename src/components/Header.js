import React, { useState } from "react";
import "./Header.css";
import logo from "../img/logo.png";
import userIcon from "../img/user-icon.png";
import LoginCadastro from "./Login";
function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir e fechar o modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <header className="header">
        <div className="logo" >
          <img src={logo} alt="Logo Azur" />
        </div>
        <div className="user-icon" onClick={toggleModal} style={{ cursor: "pointer" }}>
          <img src={userIcon} alt="Ícone do Usuário" />
        </div>
      </header>

      {isModalOpen && (
            <LoginCadastro />

      )}
    </div>
  );
}

export default Header;
