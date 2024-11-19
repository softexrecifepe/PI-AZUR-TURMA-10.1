// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../img/logo.png'; // Adicione as imagens à pasta `public/img` ou `src/img`
import userIcon from '../img/user-icon.png';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo Azur" />
            </div>
            <div className="user-icon">
                <img src={userIcon} alt="Ícone do Usuário" />
            </div>
        </header>
    );
}

export default Header;
