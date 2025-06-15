import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/CalendarPage';
import Kanban from './pages/Kanban';
import Charts from './pages/Charts';

import { ThemeProvider } from './contexts/ThemeContext.jsx';
import ThemeSelector from './components/ThemeSelector';

import "./styles/themes.css";

const App = () => {
  const [page, setPage] = useState('dashboard');

  const renderPage = () => {
    switch (page) {
      case 'dashboard': return <Dashboard />;
      case 'calendar': return <Calendar />;
      case 'kanban': return <Kanban />;
      case 'charts': return <Charts />;
      default: return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="app-fullscreen">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          background: 'var(--card)'
        }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button onClick={() => setPage('dashboard')}>Dashboard</button>
            <button onClick={() => setPage('calendar')}>Calendar</button>
            <button onClick={() => setPage('kanban')}>Kanban</button>
            <button onClick={() => setPage('charts')}>Charts</button>
          </div>
          <ThemeSelector />
        </nav>

        <main style={{ padding: '20px' }}>
          {renderPage()}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
