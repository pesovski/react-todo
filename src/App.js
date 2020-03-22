import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./tutorial/TodoForm";
import TodoList from "./tutorial/TodoList";
import Header from "./tutorial/Header";
import SubHeader from "./tutorial/SubHeader";
import ListFilter from "./tutorial/ListFilter";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  // useEffect(() => {
  //   const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storageTodos) {
  //     setTodos(storageTodos);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  // function addTodo(todo) {
  //   setTodos([todo, ...todos]);
  // }

  return (
    <div className="App container w-50 my-5">
      <Header />
      <SubHeader countTodo={todos.filter(todo => todo.completed === false)} />
      <TodoForm addTodo={todo => setTodos([todo, ...todos])} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
      <ListFilter />
    </div>
  );
}

export default App;
