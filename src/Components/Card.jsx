import React from "react";
import { Link } from 'react-router-dom';
import "../Styles/Card.css"



const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favoriteDentists = JSON.parse(localStorage.getItem('favoriteDentists')) || [];
    const newFavorite = { id, name, username };
    const updatedFavorites = [...favoriteDentists, newFavorite];
    localStorage.setItem('favoriteDentists', JSON.stringify(updatedFavorites));
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/dentist/${id}`}>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{id}</p>
        </Link>

        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
