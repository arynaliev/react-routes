import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import "./todoApp.style.css";

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addClick = () => {
    if (inputValue) {
      const newTodo = { id: uuidv4(), text: inputValue };
      setTodoList([...todoList, newTodo]);
      setInputValue("");
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onDelete = (id) => {
    setTodoList([...todoList.filter((todo) => todo.id !== id)]);
  };

  const renderTodoList = () => {
    return todoList.map((item) => (
      <TodoItem key={item.id} todo={item} onDelete={onDelete} />
    ));
  };

  return (
    <div className="todo-app">
      <div className="box">
        <input
          id="todo-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
        />
        <button id="todo-btn" onClick={addClick}>
          Add
        </button>
      </div>
      <ul>{renderTodoList()}</ul>
    </div>
  );
};

export default TodoApp;
