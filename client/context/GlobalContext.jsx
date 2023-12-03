import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [showBtn, setShowBtn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const togglePopOver = () => {
    setShowBtn(!showBtn);
  };

  const toggleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <GlobalContext.Provider value={{ showBtn, togglePopOver, toggleIsLoggedIn, isLoggedIn }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
