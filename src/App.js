import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos_list") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos_list"));
  };

  const onDelete = (todo) => {
    // console.log("I am onDelete of todo",todo)
    setTodos_list(todos_list.filter((t) => t !== todo));
    localStorage.setItem("todos_list", JSON.stringify(todos_list));
  };

  const onDone = (todo) => {
  const updatedTodos = todos_list.map((item) => {
    if (item.srNo === todo.srNo) {
      const updatedItem = {
        ...item,
        done: item.done === "Unchecked" ? "Checked" : "Unchecked",
      };
      console.log("✅ Updated todo:", updatedItem); // Log the updated item
      return updatedItem;
    }
    return item;
  });

  setTodos_list(updatedTodos);
  console.log("📋 Full updated list:", updatedTodos); // Log the entire updated list
};

  const addTodo = (title, desc) => {
    let srno;
    if (todos_list.length === 0) {
      srno = 0;
    } else {
      srno = todos_list[todos_list.length - 1].srNo + 1;
    }

    const myTodo = {
      srNo: srno,
      title: title,
      desc: desc,
      done: "Unchecked", // ✅ new key added
    };

    setTodos_list([...todos_list, myTodo]);
    console.log(myTodo);
  };

  const [todos_list, setTodos_list] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos_list", JSON.stringify(todos_list));
  }, [todos_list])

 return (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <Header title="My Todos App" searchBar={false} />

      <main className="flex-grow-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos_list} onDelete={onDelete} onDone={onDone} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </main>

      <Footer />
    </div>
  </Router>
);

}
export default App;
