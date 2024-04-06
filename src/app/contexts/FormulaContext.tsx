import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export interface FormulaContextType {}

const defaultFormulaData = {};

const FormulaContext = createContext(defaultFormulaData);

const FormulaProvider = ({ children }) => {
  return (
    <FormulaContext.Provider value={{}}>{children}</FormulaContext.Provider>
  );
};
