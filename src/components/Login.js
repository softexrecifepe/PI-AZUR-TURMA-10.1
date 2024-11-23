import React, { useState } from "react";
import axios from "axios"; 
import "./login.css";

// URL do servidor JSON
const url = 'http://localhost:5000/users';  // Corrigido para apontar para o endpoint correto

const LoginCadastro = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [nome, setNome] = useState('');
  const [nasc, setNasc] = useState('');
  const [tel, setTel] = useState('');
  const [psw, setPsw] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(""); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {
        nome,
        data: nasc,
        tel,
        email,
        senha: psw,
      });

      if (response.status === 201) {
        setError(""); // Limpar erro
        setIsModalOpen(false); // Fechar o modal após sucesso
        alert("Conta criada com sucesso!");
      }
    } catch (err) {
      setError("Erro ao criar conta. Tente novamente.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Usando GET para buscar o usuário pelo email
      const response = await axios.get(url, {
        params: { email },
      });

      // Verificar se a senha corresponde ao usuário encontrado
      const user = response.data.find((u) => u.senha === psw);

      if (user) {
        setError(""); // Limpar erro
        localStorage.setItem("user", JSON.stringify(user)); // Armazenar usuário no localStorage
        alert("Login bem-sucedido!");
        // Redirecionar ou fechar o modal
        setIsModalOpen(false); 
      } else {
        setError("Email ou senha inválidos.");
      }
    } catch (err) {
      setError("Erro ao tentar fazer login. Tente novamente.");
    }
  };

  return (
    isModalOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <span
              className={`tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => handleTabClick("login")}
            >
              LOGIN
            </span>
            <span
              className={`tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => handleTabClick("signup")}
            >
              CADASTRO
            </span>
            <span
              id="closeModal"
              style={{ cursor: "pointer" }}
              onClick={handleCloseModal}
            >
              &times;
            </span>
          </div>

          <div className="form-container">
            {activeTab === "login" && (
              <form className="form active" onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="emailLogin">E-mail</label>
                  <input
                    type="email"
                    id="emailLogin"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordLogin">Senha</label>
                  <input
                    type="password"
                    id="passwordLogin"
                    placeholder="Sua senha"
                    value={psw}
                    onChange={(e) => setPsw(e.target.value)}
                  />
                  <a href="#" className="forgot-password">
                    Esqueci minha senha
                  </a>
                </div>
                <button type="submit" className="btn">
                  Login
                </button>
              </form>
            )}

            {/* Formulário de Cadastro */}
            {activeTab === "signup" && (
              <form className="form" onSubmit={handleSubmit}>
                {error && <div className="error">{error}</div>}
                <div className="form-group">
                  <label htmlFor="nameSignup">Nome</label>
                  <input
                    type="text"
                    id="nameSignup"
                    placeholder="Informe seu nome"
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="birthdateSignup">Data de Nascimento</label>
                  <input
                    required
                    type="date"
                    id="birthdateSignup"
                    onChange={(e) => setNasc(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneSignup">Telefone</label>
                  <input
                    type="text"
                    id="phoneSignup"
                    placeholder="(__) ____-____"
                    onChange={(e) => setTel(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailSignup">E-mail</label>
                  <input
                    type="email"
                    id="emailSignup"
                    placeholder="Seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordSignup">Senha</label>
                  <input
                    type="password"
                    id="passwordSignup"
                    placeholder="Sua senha"
                    onChange={(e) => setPsw(e.target.value)}
                    required
                  />
                </div>
                <button className="btn">Criar conta</button>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default LoginCadastro;
