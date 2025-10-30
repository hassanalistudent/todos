import React from 'react';
import { TodoItems } from './TodoItems';

export const Todos = ({ todos ,onDelete}) => {
  let todostyle={
    minheight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className='container ' style={todostyle} >
      <h3 className=' my-3'>Todos</h3>
      {todos.length===0?"No todos to display":
      todos.map((todo, index) => (
        <TodoItems key={index} todo={todo} onDelete={onDelete} />
      ))
    }
      {/* <TodoItems todo={todos[0]} /> */}
    </div>
  );
};