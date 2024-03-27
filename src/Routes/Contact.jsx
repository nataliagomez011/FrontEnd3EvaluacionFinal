import React, { useState } from 'react';
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (formData) => {
    // Lógica para enviar el formulario
    setSuccess(true);
  };

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form onSubmit={handleSubmit}/>
      {error && <p>{error}</p>}
      {success && <p>Thanks for reach us.</p>}
    </div>
  )
}

export default Contact