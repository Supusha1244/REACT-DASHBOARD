import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/CalendarPage';
import Kanban from './pages/Kanban';
import Charts from './pages/Charts';

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
    <div className="app-fullscreen">
      <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#eee' }}>
        <button onClick={() => setPage('dashboard')}>Dashboard</button>
        <button onClick={() => setPage('calendar')}>Calendar</button>
        <button onClick={() => setPage('kanban')}>Kanban</button>
        <button onClick={() => setPage('charts')}>Charts</button>
      </nav>
      <main style={{ padding: '20px' }}>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;

