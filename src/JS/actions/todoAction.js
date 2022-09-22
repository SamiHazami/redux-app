import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  STATUS_TODO,
} from "../actionTypes/todoActionTypes";

// funtion that returns an object : { type , payload}
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

// delete
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

// edit
export const editTodo = (id, textEdited) => {
  return {
    type: EDIT_TODO,
    payload: { id, textEdited },
  };
};

// status

export const statusTodo = (id) => {
  return {
    type: STATUS_TODO,
    payload: id,
  };
};
