import React, { useState } from "react";
import InputField from "../components/InputField";
import "../styles/Signup.css"; // Importação do CSS

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="signup-container">
      <h2>Cadastre-se no Spotify</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Nome" name="name" value={form.name} onChange={handleChange} />
        <InputField label="E-mail" name="email" value={form.email} onChange={handleChange} />
        <InputField label="Senha" name="password" type="password" value={form.password} onChange={handleChange} />
        <InputField label="Confirmar Senha" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} />

        <button type="submit" className="signup-button">Cadastrar</button>
      </form>
      <p className="login-link">Já tem uma conta? <a href="#">Entrar</a></p>
    </div>
  );
};

export default Signup;
