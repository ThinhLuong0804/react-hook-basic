import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm({ onSubmit = null }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formValues = {
      title: value,
    };

    onSubmit(formValues);

    // Reset form
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange}></input>
    </form>
  );
}

export default TodoForm;
