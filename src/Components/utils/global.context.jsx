import React, { createContext, useState, useReducer } from 'react';

const ThemeContext = createContext(); // Crear el contexto

const initialState = {
  theme: 'light',
  apiData: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    case 'SET_API_DATA':
      return {
        ...state,
        apiData: action.payload
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado del tema
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light'); // Cambiar entre temas
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, AppProvider };


