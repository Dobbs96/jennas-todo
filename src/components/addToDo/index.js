import React, { useState } from "react";
import "./style.css";

function AddToDo() {
  const [formState, setFormState] = useState({ toDo: "", dueDate: "" });

  const handleToDoList = async (event) => {
    event.preventDefault();
    const myToDo = await setFormState({
      variables: {
        toDo: formState.toDo,
        dueDate: formState.dueDate,
      },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div>
      <form onSubmit={handleToDoList}>
        <div className="flex-row space-between my-2">
          <label htmlFor="toDo">To Do:</label>
          <input
            placeholder="What do you have to do?"
            name="toDo"
            type="toDo"
            id="toDo"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            placeholder="Last"
            name="dueDate"
            type="dueDate"
            id="dueDate"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
