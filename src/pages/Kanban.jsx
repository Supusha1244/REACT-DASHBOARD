import React, { useEffect } from 'react';
import Sortable from 'sortablejs';

const Kanban = () => {
  useEffect(() => {
    const todo = document.getElementById('todo');
    const doing = document.getElementById('doing');
    const done = document.getElementById('done');

    [todo, doing, done].forEach(el => {
      new Sortable(el, {
        group: 'shared',
        animation: 150
      });
    });
  }, []);

  const addTask = (columnId) => {
    const column = document.getElementById(columnId);
    const newTask = document.createElement('div');
    newTask.className = 'kanban-item';
    newTask.textContent = `New Task ${column.children.length + 1}`;
    column.appendChild(newTask);
  };

  return (
    <>
      <style>{`
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
        .kanban-container {
          max-width: 1200px;
          display: flex;
          gap: 2rem;
          width: 100%;
          justify-content: center;
        }
        .kanban-column {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgb(0 0 0 / 0.05);
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 1rem;
          max-width: 350px;
        }
        .kanban-column h3 {
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          user-select: none;
        }
        .kanban-column h3.todo-heading {
          color: #2563eb; /* blue-600 */
        }
        .kanban-column h3.doing-heading {
          color: #d97706; /* amber-600 */
        }
        .kanban-column h3.done-heading {
          color: #16a34a; /* green-600 */
        }
        .kanban-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex-grow: 1;
          min-height: 120px;
        }
        .kanban-item {
          background: #e0e7ff; /* default light blue */
          padding: 1rem 1.25rem;
          border-radius: 0.75rem;
          box-shadow: 0 2px 6px rgb(99 102 241 / 0.4);
          color: #1e293b;
          font-weight: 600;
          cursor: grab;
          user-select:none;
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }
        .kanban-item:active {
          cursor: grabbing;
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgb(99 102 241 / 0.7);
        }
        /* Different background colors per column for items */
        #todo .kanban-item {
          background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
          box-shadow: 0 2px 6px rgb(59 130 246 / 0.5);
          color: #1e293b;
        }
        #doing .kanban-item {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          box-shadow: 0 2px 6px rgb(202 138 4 / 0.7);
          color: #78350f;
        }
        #done .kanban-item {
          background: linear-gradient(135deg, #dcfce7, #86efac);
          box-shadow: 0 2px 6px rgb(21 128 61 / 0.6);
          color: #14532d;
        }
        button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          border: none;
          background-color: #374151;
          color: white;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
          user-select:none;
        }
        button:hover {
          background-color: #1f2937;
        }
        button:focus {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
      `}</style>
      <div className="page">
        <h1>Kanban Board</h1>
        <div className="kanban-container" role="list">
          <section className="kanban-column" aria-labelledby="todo-heading">
            <h3 id="todo-heading" className="todo-heading">To Do</h3>
            <div id="todo" className="kanban-list" role="list">
              <div className="kanban-item" role="listitem" tabIndex={0}>Task 1</div>
              <div className="kanban-item" role="listitem" tabIndex={0}>Task 2</div>
            </div>
            <button onClick={() => addTask('todo')} aria-label="Add task to To Do list">Add +</button>
          </section>

          <section className="kanban-column" aria-labelledby="doing-heading">
            <h3 id="doing-heading" className="doing-heading">Doing</h3>
            <div id="doing" className="kanban-list" role="list">
              <div className="kanban-item" role="listitem" tabIndex={0}>Task 3</div>
            </div>
            <button onClick={() => addTask('doing')} aria-label="Add task to Doing list">Add +</button>
          </section>

          <section className="kanban-column" aria-labelledby="done-heading">
            <h3 id="done-heading" className="done-heading">Done</h3>
            <div id="done" className="kanban-list" role="list">
              <div className="kanban-item" role="listitem" tabIndex={0}>Task 4</div>
            </div>
            <button onClick={() => addTask('done')} aria-label="Add task to Done list">Add +</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Kanban;


