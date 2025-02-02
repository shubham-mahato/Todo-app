import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
import "../App.css";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
  );

  const inputRef = useRef();
  
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;

    const newTodo = { id: Date.now(), text: inputText, isComplete: false };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="todo-container place-self-center">
      {/* Title */}
      <div className="flex items-center gap-3 mb-5">
        <img className="w-10" src={todo_icon} alt="Todo Icon" />
        <h1 className="text-2xl font-semibold">To-Do List</h1>
      </div>

      {/* Input Box */}
      <div className="input-box mb-5">
        <input ref={inputRef} type="text" placeholder="Add your task..." />
        <button onClick={add} className="add-btn">ADD +</button>
      </div>

      {/* Todo List */}
      <div>
        {todoList.length === 0 ? (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        ) : (
          todoList.map((item) => (
            <TodoItems key={item.id} {...item} deleteTodo={deleteTodo} toggle={toggle} />
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;

