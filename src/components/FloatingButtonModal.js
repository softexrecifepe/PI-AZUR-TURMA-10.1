import React, { useState } from 'react';
import './FloatingButtonModal.css'; // Importa o CSS para estilização

function FloatingButtonModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOpen = (option) => {
    setSelectedOption(option);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedOption('');
  };

  return (
    <div>
      {/* Botão Flutuante */}
      <button className="floating-button" onClick={() => setIsOpen(!isOpen)}>
        Solicitar
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleClose}>X</button>
            {selectedOption === 'visita' && (
              <div>
                <h2>Solicitação de Visita</h2>
                <FormVisita />
              </div>
            )}
            {selectedOption === 'reuniao' && (
              <div>
                <h2>Solicitação de Reunião Online</h2>
                <FormReuniao />
              </div>
            )}
            {!selectedOption && (
              <div className="options-container">
                <button onClick={() => handleOpen('visita')}>Solicitação de Visita</button>
                <button onClick={() => handleOpen('reuniao')}>Solicitação de Reunião Online</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function FormVisita() {
  return (
    <form className="form">
      {/* Formulário de Solicitação de Visita */}
      <label>Dias da Semana</label>
      <input type="text" placeholder="Seg à Sex" />
      <label>Horário</label>
      <input type="text" placeholder="--:--" /> às <input type="text" placeholder="--:--" />
      <label>CPF</label>
      <input type="text" placeholder="000.000.000-00" />
      <div className="captcha">reCAPTCHA aqui</div>
      <button className="submit-button">Agendar</button>
    </form>
  );
}

function FormReuniao() {
  return (
    <form className="form">
      {/* Formulário de Solicitação de Reunião Online */}
      <label>Dias da Semana</label>
      <input type="text" placeholder="Seg à Sex" />
      <label>Horário</label>
      <input type="text" placeholder="--:--" /> às <input type="text" placeholder="--:--" />
      <label>CPF</label>
      <input type="text" placeholder="000.000.000-00" />
      <label>Plataforma de preferência</label>
      <div>
        <input type="radio" id="whatsapp" name="platform" value="WhatsApp" />
        <label htmlFor="whatsapp">WhatsApp</label>
        <input type="radio" id="googlemeet" name="platform" value="Google Meet" />
        <label htmlFor="googlemeet">Google Meet</label>
      </div>
      <div className="captcha">reCAPTCHA aqui</div>
      <button className="submit-button">Agendar</button>
    </form>
  );
}

export default FloatingButtonModal;
