import React, { useState } from 'react';
import { TodoItems } from './TodoItems';

export const Todos = ({ todos, onDelete, onDone }) => {
  const [filter, setFilter] = useState("All");

  // Filter logic
  const filteredTodos = todos.filter(todo => {
    if (filter === "Checked") return todo.done === "Checked";
    if (filter === "Unchecked") return todo.done === "Unchecked";
    return true; // "All"
  });

  return (
    <div className='container'>
      <div className="d-flex justify-content-between align-items-center my-3">
        <h3 className="mb-0">Todos</h3>
        <select
          className="form-select w-auto"
          style={{ minWidth: "150px" }}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Checked">Checked</option>
          <option value="Unchecked">Unchecked</option>
        </select>
      </div>

      {/* 📝 Todo List */}
      {filteredTodos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        filteredTodos.map((todo, index) => (
          <TodoItems key={index} todo={todo} onDelete={onDelete} onDone={onDone} />
        ))
      )}
    </div>
  );
};