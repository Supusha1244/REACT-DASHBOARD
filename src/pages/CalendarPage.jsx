import React, { useEffect, useRef, useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const CalendarPage = () => {
  const { theme } = useContext(ThemeContext);
  const calendarRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');

  useEffect(() => {
    if (window.FullCalendar && calendarRef.current) {
      const calendar = new window.FullCalendar.Calendar(calendarRef.current, {
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
        events: [], // you can add static events here if needed
        themeSystem: 'standard',
        height: 'auto'
      });
      calendar.render();
      calendarRef.current._calendar = calendar;
    }
  }, []);

  const handleAddEvent = () => {
    if (!eventTitle || !eventDate) return alert("Please fill in both fields.");
    const calendarApi = calendarRef.current._calendar;
    calendarApi.addEvent({
      title: eventTitle,
      start: eventDate,
      allDay: true,
    });
    setEventTitle('');
    setEventDate('');
    setShowModal(false);
  };

  return (
    <>
      <style>{`
        html, body, #root {
          margin: 0;
          height: 100%;
          font-family: 'Inter', sans-serif;
        }
        
        .light-theme {
          --bg-color: #ffffff;
          --text-color: #111827;
          --card-bg: #f9fafb;
          --btn-bg: #3b82f6;
          --btn-hover: #2563eb;
          --modal-bg: white;
        }

        .dark-theme {
          --bg-color: #1f2937;
          --text-color: #f9fafb;
          --card-bg: #374151;
          --btn-bg: #2563eb;
          --btn-hover: #3b82f6;
          --modal-bg: #111827;
        }

        .page {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--bg-color);
          color: var(--text-color);
          min-height: 100vh;
        }

        .calendar-container {
          background: var(--card-bg);
          border-radius: 0.75rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          width: 100%;
          max-width: 1000px;
        }

        #calendar {
          min-height: 550px;
          border-radius: 0.5rem;
          overflow: auto;
        }

        .add-event-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background-color: var(--btn-bg);
          color: white;
          border: none;
          border-radius: 9999px;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          font-size: 1.25rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          z-index: 1000;
          transition: background-color 0.3s ease;
        }

        .add-event-button:hover {
          background-color: var(--btn-hover);
        }

        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
        }

        .modal {
          background: var(--modal-bg);
          color: var(--text-color);
          padding: 2rem;
          border-radius: 1rem;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .modal label {
          font-weight: 600;
        }

        .modal input {
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          background-color: white;
          color: black;
        }

        .dark-theme .modal input {
          background-color: #1f2937;
          color: white;
          border-color: #4b5563;
        }

        .modal button {
          background-color: var(--btn-bg);
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          margin-right: 1rem;
        }

        .modal button.cancel {
          background-color: #d1d5db;
          color: #111827;
        }

        .dark-theme .modal button.cancel {
          background-color: #374151;
          color: #f9fafb;
        }

        .fc-event {
          background-color: #3b82f6 !important;
          color: white !important;
          border: none !important;
          border-radius: 0.5rem !important;
          font-weight: 600;
        }
      `}</style>

      <main className={`page ${theme}-theme`} role="main">
        <h1>Calendar</h1>
        <section className="calendar-container" aria-label="Calendar container">
          <div ref={calendarRef} id="calendar" />
        </section>

        <button className="add-event-button" onClick={() => setShowModal(true)}>
          + Add Event
        </button>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2 style={{ marginBottom: '1rem' }}>Add Event</h2>
              <label>Title</label>
              <input
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                placeholder="Event title"
              />
              <label>Date</label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={handleAddEvent}>Add</button>
                <button className="cancel" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default CalendarPage;
