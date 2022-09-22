import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../JS/actions/todoAction";

const AddTodo = () => {
  const [text, setText] = useState("Add your todo");
  const dispatch = useDispatch();

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    dispatch(addTodo({ id: Math.random(), text: text, done: false }));
  };

  return (
    <div>
      <input type="text" onChange={handleText} value={text} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
