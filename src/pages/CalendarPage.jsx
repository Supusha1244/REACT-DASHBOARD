import React, { useEffect } from 'react';

const CalendarPage = () => {
  React.useEffect(() => {
    if (window.FullCalendar && document.getElementById('calendar')) {
      const calendarEl = document.getElementById('calendar');
      const calendar = new window.FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        buttonText: {
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day'
        },
        themeSystem: 'standard',
        height: 'auto'
      });
      calendar.render();
    }
  }, []);

  return (
    <>
      <style>{`
        /* Reset and base */
        html, body, #root {
          margin: 0;
          height: 100%;
          background-color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          color: #6b7280; /* Neutral gray */
        }
        .page {
          background: #f9fafb;
          min-height: 100vh;
          padding: 2rem 1rem;
          font-family: 'Inter', sans-serif;
          color: #374151;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h1 {
          font-weight: 700;
          font-size: 3rem;
          margin-bottom: 2rem;
          color: #111827;
        }
        .calendar-container {
          background: #ffffff;
          border-radius: 0.75rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
          padding: 1rem;
          box-sizing: border-box;
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          min-height: 0;
          overflow: hidden; /* Prevent overflow of the container */
        }
        #calendar {
          flex-grow: 1;
          min-height: 550px;
          border-radius: 0.5rem;
          overflow: auto; 
        }
        /* FullCalendar toolbar styles */
        .fc .fc-toolbar-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #111827;
        }
        .fc-button {
          background-color: #111827;
          color: #f9fafb;
          font-weight: 600;
          border-radius: 0.5rem;
          border: none;
          padding: 0.5rem 1.25rem;
          margin: 0 0.2rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .fc-button:hover:not(:disabled) {
          background-color: #2563eb;
          color: white;
        }
        .fc-button:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .fc-daygrid-day:hover {
          background-color: #e0e7ff;
          border-radius: 0.5rem;
          transition: background-color 0.2s ease;
        }
        .fc-event {
          background-color: #2563eb !important;
          border-radius: 0.5rem !important;
          border: none !important;
          font-weight: 600;
          box-shadow: 0 2px 6px rgb(59 130 246 / 0.5);
          cursor: pointer;
          user-select: none;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .fc-event:hover {
          background-color: #1d4ed8 !important;
          box-shadow: 0 4px 12px rgb(37 99 235 / 0.7);
        }
      `}</style>

      <main className="page" role="main">
        <h1>Calendar</h1>
        <section className="calendar-container" aria-label="Calendar container">
          <div id="calendar" />
        </section>
      </main>
    </>
  );
};

export default CalendarPage;
