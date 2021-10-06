import React from "react";

function addToDo() {
  return (
    <div>
      <form>
        <div className="flex-row space-between my-2">
          <label htmlFor="toDo">To Do:</label>
          <input
            placeholder="What do you have to do?"
            name="toDo"
            type="toDo"
            id="toDo"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            placeholder="Last"
            name="dueDate"
            type="dueDate"
            id="dueDate"
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default addToDo;
