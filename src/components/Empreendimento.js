// src/components/Empreendimento.js
import React from 'react';

const Empreendimento = ({ imagem, titulo, descricao }) => (
    <div className="empreendimento-item">
        <img src={imagem} alt={titulo} className="empreendimento-img" />
        <h3>{titulo}</h3>
        <p>{descricao}</p>
    </div>
);

export default Empreendimento;
