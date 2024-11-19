// src/components/Empreendimentos.js
import React from 'react';
import Empreendimento from './Empreendimento';
import "./Empreendimentos.css";
import "../index.js";

// Importe as imagens
import MauaImg from '../img/maue.png';
import OleiroImg from '../img/oleiro.png';
import PalmeirasImg from '../img/palmeiras.png';

const Empreendimentos = () => (
    <section className="empreendimentos-section">
        <h2>Empreendimentos</h2>
        <div className="empreendimentos-list">
            <Empreendimento 
                imagem={MauaImg} 
                titulo="Mauá" 
                descricao="Sua casa na natureza, rodeada por áreas verdes que promovem saúde e bem-estar." 
            />
            <Empreendimento 
                imagem={OleiroImg} 
                titulo="Oleiro" 
                descricao="Para quem preza o estilo e uma vida urbana, o Oleiro oferece conforto e acabamentos diferenciados." 
            />
            <Empreendimento 
                imagem={PalmeirasImg} 
                titulo="Reserva das Palmeiras" 
                descricao="Conforto e exclusividade em um cenário de urbanização com área de lazer para toda a família." 
            />
        </div>
    </section>
);

export default Empreendimentos;
