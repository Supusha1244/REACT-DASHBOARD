import React, { useContext } from 'react';
import '../styles/Sidebar.css';
import { ThemeContext } from '../context/ThemeContext';

const Sidebar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/calendar">Calendar</NavLink>
      <NavLink to="/kanban">Kanban</NavLink>
      <NavLink to="/charts">Charts</NavLink>
      <button onClick={toggleTheme} className="theme-toggle">Toggle Theme</button>
    </div>
  );
};

export default Sidebar;

