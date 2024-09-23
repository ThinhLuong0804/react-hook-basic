import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

function TodoList({ todos = [], onTodoClick = null }) {
  function handleTodoClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleTodoClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
