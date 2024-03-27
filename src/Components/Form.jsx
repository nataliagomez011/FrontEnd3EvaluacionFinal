import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: ""
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones
    if (formData.fullName.length < 5) {
      setError("El nombre debe tener al menos 5 caracteres");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError("Por favor, introduce un correo electrónico válido");
      return;
    }
    if (!isValidPhone(formData.phone)) {
      setError("Por favor, introduce un número de teléfono válido");
      return;
    }
    if (!isValidWebsite(formData.website)) {
      setError("Por favor, introduce un sitio web válido");
      return;
    }
    // Si todas las validaciones pasan, se puede enviar el formulario
    console.log("Formulario enviado:", formData);
    setFormData({ fullName: "", email: "", phone: "", website: "" });
    setError("");
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPhone = (phone) => {
    return /^\d+$/.test(phone);
  };

  const isValidWebsite = (website) => {
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return urlPattern.test(website);
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="website">Website:</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;

