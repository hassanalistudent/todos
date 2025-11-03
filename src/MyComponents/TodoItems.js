import React from 'react';
import { FaTrash } from "react-icons/fa";

export const TodoItems = ({ todo, onDelete, onDone }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title mb-1">{todo.title}</h5>
          <p className="card-text text-muted mb-0">{todo.desc}</p>
        </div>

        <div className="d-flex align-items-center gap-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={todo.done === "Checked"} // ✅ Explicit boolean check
            onChange={() => onDone(todo)}
            title="Mark as done"
          />
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDelete(todo)}
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};