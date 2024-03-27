import React from "react";
import { Link } from 'react-router-dom';
import "../Styles/Card.css"

const Card = ({ dentist }) => {
  const { id, name, username } = dentist; 

  const addFav = () => {
    const favoriteDentists = JSON.parse(localStorage.getItem('favoriteDentists')) || [];
    const newFavorite = { id, name, username };
    const updatedFavorites = [...favoriteDentists, newFavorite];
    localStorage.setItem('favoriteDentists', JSON.stringify(updatedFavorites));
  }

  return (
    <div className="card">
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

