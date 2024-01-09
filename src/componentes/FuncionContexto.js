// FuncionContexto.js
import React, { createContext, useState, useRef } from 'react';

export const FuncionContext = createContext();

export const FuncionContextProvider = ({ children }) => {
  const [selectedFunc, setSelectedFunc] = useState("a*x");
  return (
    <FuncionContext.Provider value={{ selectedFunc, setSelectedFunc}}>
      {children}
    </FuncionContext.Provider>
  );
};
