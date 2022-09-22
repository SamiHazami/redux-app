import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, statusTodo } from "../../JS/actions/todoAction";

const Todo = ({ todo }) => {
  const [editedText, setEditedText] = useState(todo.text);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTodo(todo.id, editedText));
    setEdit(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDone = (id) => {
    dispatch(statusTodo(id));
  };

  const handleCancel = () => {
    setEdit(false);
    setEditedText(todo.text);
  };

  return (
    <div key={todo.id}>
      {edit ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <span className={todo.done ? "textDone" : null}>{todo.text}</span>
      )}

      <button onClick={() => setEdit(true)}>Edit</button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
      <button onClick={() => handleDone(todo.id)}>
        {todo.done ? "undone" : "done"}
      </button>
    </div>
  );
};

export default Todo;
