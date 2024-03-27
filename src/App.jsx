import React from 'react';
import { AppProvider } from './Components/utils/global.context';


import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

// Importar los componentes de ruta individuales
import Contact from './Routes/Contact';
import Dentist from './Routes/Dentist';
import Favs from './Routes/Favs';
import Home from './Routes/Home';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Navbar />
        {/* Renderizar los componentes de ruta */}
        <Contact />
        <Dentist />
        <Favs />
        <Home />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;

