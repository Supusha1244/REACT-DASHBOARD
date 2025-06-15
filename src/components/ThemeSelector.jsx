// src/components/ThemeSelector.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../styles/ThemeSelector.css";

const ThemeSelector = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <select value={theme} onChange={(e) => changeTheme(e.target.value)} className="theme-selector">
      <option value="light">🌞 Light</option>
      <option value="dark">🌙 Dark</option>
      <option value="multicolor">🎨 Multicolor</option>
    </select>
  );
};

export default ThemeSelector;
