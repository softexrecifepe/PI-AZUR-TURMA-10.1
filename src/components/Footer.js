// src/components/Footer.js
import React from 'react';
import './Footer.css';
import facebookIcon from '../img/facebook-icon.png';
import instagramIcon from '../img/instagram-icon.png';
import linkedinIcon from '../img/linkedin-icon.png';
import logo from '../img/privacidade.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <div className="social-icons">
                        <a href="/azur-app/src/img/facebook-icon.png"><img src={facebookIcon} alt="Facebook" /></a>
                        <a href="/azur-app/src/img/instagram-icon.png"><img src={instagramIcon} alt="Instagram" /></a>
                        <a href="/azur-app/src/img/linkedin-icon.png"><img src={linkedinIcon} alt="LinkedIn" /></a>
                    </div>
                    <p className="phone">+55 (87) 9 8168-8903</p>
                    <address>
                        Rua Santa Luzia, 36, Sala 102<br />
                        Centro, Petrolina - PE, 56334-000
                    </address>
                </div>
                {/* <div className="footer-links">
                    <a href="/azur-app/src/img/">Política de Privacidade</a>
                </div> */}
                <div>
                    <div className="footer-img">
                        <img 
                        src={logo}/>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Azur Development - Copyright 2024 © Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
