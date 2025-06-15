// src/contexts/ThemeContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (value) => {
    setTheme(value);
  };

  useEffect(() => {
    document.body.className = ""; // Clear existing classes
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


