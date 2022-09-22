import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../TodoList/Todo";
import "./TodoList.css";

const TodoList = () => {
  const [filter, setFilter] = useState("all");
  const todos = useSelector((store) => store.todoReducer.todoList);
  return (
    <div>
      <AddTodo />

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("undone")}>undone</button>
      </div>

      {filter == "done"
        ? todos
            .filter((todo) => todo.done === true)
            .map((todo) => <Todo key={todo.id} todo={todo} />)
        : filter == "undone"
        ? todos
            .filter((todo) => todo.done === false)
            .map((todo) => <Todo key={todo.id} todo={todo} />)
        : todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
