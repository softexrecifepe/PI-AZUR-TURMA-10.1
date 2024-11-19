// src/components/MainContent.js
import React from 'react';
import './MainContent.css';

function MainContent() {
    return (
        <main className="main-content">
            <section className="team-section">
                <h2>EQUIPE AZUR</h2>
                <h3>Clientes e Solicitações</h3>
                <div className="client-list">
                    <div className="client-item">
                        <span onClick={() => window.location.href = 'agendamento.html'} style={{ cursor: 'pointer', color: 'black' }}>João Silva</span>
                        <span>Reserva das Palmeiras</span>
                        <span>Planta A</span>
                        <span>Reunião</span>
                    </div>
                    {/* Adicione outros clientes aqui */}
                </div>
                <div className="export-options">
                    <a href="/azur-app/src/img/csv.png">exportar como .csv</a>
                    <a href="/azur-app/src/img/pdf.png">exportar como .pdf</a>
                </div>
            </section>

            <section className="crm-panel">
                <h3>Painel de CRM</h3>
                <div className="crm-stats">
                    <p>Taxa de conversão do último mês:</p>
                    <p>Taxa de evasão:</p>
                    <p>Cliques por empreendimento:</p>
                    <p>Abrir Dashboard Online</p>
                </div>
            </section>
        </main>
    );
}

export default MainContent;
