import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './utils/global.context'
import "../Styles/Navbar.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    toggleTheme(); // Método para cambiar el tema del contexto global
  };

  return (
    <nav className={theme === 'dark' ? 'darkTheme' : 'lightTheme'}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/favs">Favs</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <button onClick={changeTheme}>Change theme</button>
    </nav>
  );
}

export default Navbar