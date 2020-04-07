import { createStore } from "redux";

// if local storage does not exist
if (!localStorage.getItem("todos")) {
  localStorage.setItem("todos", JSON.stringify([]));
}

// initial state
const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")),
};

// action
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

// action creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id,
});

// reducer function

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      localStorage.setItem(
        "todos",
        JSON.stringify([...state.todos, action.payload])
      );
      return {
        todos: [...state.todos, action.payload],
      };

    case REMOVE_TODO:
      const newTodoArr = [...state.todos];
      const finalArr = newTodoArr.filter((todo) => todo.id !== action.id);
      localStorage.setItem("todos", JSON.stringify(finalArr));
      return {
        todos: finalArr,
      };

    default:
      return state;
  }
};

// store

const store = createStore(reducer);

export default store;
