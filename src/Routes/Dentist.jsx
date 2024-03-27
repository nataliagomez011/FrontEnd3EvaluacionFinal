import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Dentist = () => {
  const [dentist, setDentist] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/`);
        const data = await response.json();
        setDentist(data.results[0]); 
      } catch (error) {
        console.error('Error fetching dentist data:', error);
      }
    };
    fetchDentist();
  }, [id]); 

  if (!dentist) {
    return <div>Cargando...</div>;
  }

  const { name, email, phone, website } = dentist;

  return (
    <>
      <div>
        <h1>Detail Dentist</h1>
        <p>Name: {name.first} {name.last}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </div>
    </>
  )
}

export default Dentist;

