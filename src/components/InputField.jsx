import React from "react";
import "../styles/Signup.css"; // Estilos

const InputField = ({ label, name, type = "text", value, onChange }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} required />
    </div>
  );
};

export default InputField;
