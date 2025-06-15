import React, { useEffect, useState } from 'react';
import Sortable from 'sortablejs';

const COLUMN_IDS = ['todo', 'doing', 'done'];

const Kanban = () => {
  const [tasks, setTasks] = useState({
    todo: [{ text: 'Buy groceries', label: 'High', due: '' }, { text: 'Review PR', label: 'Bug', due: '' }],
    doing: [{ text: 'Write report', label: 'UI', due: '' }],
    done: [{ text: 'Deploy app', label: 'Low', due: '' }],
  });

  useEffect(() => {
    COLUMN_IDS.forEach((id) => {
      const el = document.getElementById(id);
      Sortable.create(el, {
        group: 'shared',
        animation: 150,
        onEnd: (e) => {
          const from = e.from.id;
          const to = e.to.id;
          const movedItem = tasks[from][e.oldIndex];

          if (from !== to) {
            const newFrom = [...tasks[from]];
            newFrom.splice(e.oldIndex, 1);
            const newTo = [...tasks[to]];
            newTo.splice(e.newIndex, 0, movedItem);

            setTasks((prev) => ({
              ...prev,
              [from]: newFrom,
              [to]: newTo,
            }));
          }
        },
      });
    });
  }, [tasks]);

  const handleAddTask = (columnId) => {
    const newTask = { text: `New Task ${tasks[columnId].length + 1}`, label: 'None', due: '' };
    setTasks((prev) => ({
      ...prev,
      [columnId]: [...prev[columnId], newTask],
    }));
  };

  const handleDeleteTask = (columnId, index) => {
    const updated = [...tasks[columnId]];
    updated.splice(index, 1);
    setTasks((prev) => ({ ...prev, [columnId]: updated }));
  };

  const handleChange = (columnId, index, field, value) => {
    const updated = [...tasks[columnId]];
    updated[index][field] = value;
    setTasks((prev) => ({ ...prev, [columnId]: updated }));
  };

  const labelColors = {
    Bug: '#ef4444',
    High: '#f97316',
    UI: '#3b82f6',
    Low: '#10b981',
    None: '#9ca3af',
  };

  const headingBgColors = {
    todo: '#f3f4f6',
    doing: '#f3f4f6',
    done: '#f3f4f6',
  };

  return (
    <>
      <style>{`
        .page {
          padding: 2rem;
          background: #ffffff;
          border-radius: 0.5rem;
        }

        h1 {
          text-align: center;
          color: #1f2937;
          margin-bottom: 2rem;
        }

        .kanban-container {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .kanban-column {
          background: #f9fafb;
          border-radius: 1rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
          padding: 1rem;
          width: 100%;
          max-width: 300px;
          display: flex;
          flex-direction: column;
          transition: background-color 0.3s ease;
        }

        .kanban-column h3 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
          color: #000000;
          padding: 0.5rem;
          border-radius: 0.5rem;
          text-align: center;
          font-weight: bold;
          background-color: #e5e7eb;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .kanban-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-height: 120px;
          flex-grow: 1;
        }

        .kanban-item {
          background: #ffffff;
          border-left: 4px solid #3b82f6;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          display: flex;
          flex-direction: column;
          font-size: 0.95rem;
          color: #1f2937;
          position: relative;
          transition: box-shadow 0.3s ease;
        }

        .kanban-item:hover {
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .task-content {
          outline: none;
          font-weight: 500;
        }

        .task-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.5rem;
        }

        .label {
          font-size: 0.75rem;
          padding: 0.2rem 0.5rem;
          border-radius: 9999px;
          font-weight: 600;
          color: white;
        }

        .task-actions button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          margin-left: 0.25rem;
        }

        .add-btn {
          margin-top: 1rem;
          padding: 0.5rem;
          border-radius: 0.5rem;
          background: #3b82f6;
          color: white;
          border: none;
          cursor: pointer;
        }

        .add-btn:hover {
          background: #2563eb;
        }

        .due-input {
          font-size: 0.75rem;
          margin-left: 0.5rem;
        }

        @media (prefers-color-scheme: dark) {
          .page {
            background: #111827;
          }

          h1 {
            color: #f9fafb;
          }

          .kanban-column {
            background: #1f2937;
          }

          .kanban-column h3 {
            background: #374151;
            color: #ffffff;
          }

          .kanban-item {
            background: #374151;
            color: #f3f4f6;
          }
        }
      `}</style>

      <div className="page">
        <h1>Kanban Board</h1>
        <div className="kanban-container">
          {COLUMN_IDS.map((columnId) => (
            <div key={columnId} className="kanban-column">
              <h3 style={{ backgroundColor: headingBgColors[columnId], color: '#000000' }}>
                {columnId === 'todo' ? '📝 To Do' : columnId === 'doing' ? '⚙️ Doing' : '✅ Done'}
              </h3>
              <div id={columnId} className="kanban-list">
                {tasks[columnId].map((task, idx) => (
                  <div key={idx} className="kanban-item">
                    <div
                      className="task-content"
                      contentEditable
                      suppressContentEditableWarning={true}
                      onBlur={(e) => handleChange(columnId, idx, 'text', e.target.textContent)}
                    >
                      {task.text}
                    </div>
                    <div className="task-meta">
                      <span
                        className="label"
                        style={{ backgroundColor: labelColors[task.label] || '#9ca3af' }}
                      >
                        {task.label}
                      </span>
                      <input
                        type="date"
                        className="due-input"
                        value={task.due}
                        onChange={(e) => handleChange(columnId, idx, 'due', e.target.value)}
                      />
                      <div className="task-actions">
                        <button onClick={() => handleDeleteTask(columnId, idx)} title="Delete">🗑️</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="add-btn" onClick={() => handleAddTask(columnId)}>
                + Add Task
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Kanban;
