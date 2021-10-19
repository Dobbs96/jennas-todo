import React from "react";
import "./style.css";

function ToDoList() {
  return (
    <main>
      <h1>To Do</h1>
      <ul>
        <li>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Due 01 Oct 21</p>
          </div>
        </li>
        <li>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Due 06 Oct 21</p>
          </div>
        </li>
        <li>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Due 08 Oct 21</p>
          </div>
        </li>
      </ul>
    </main>
  );
}

export default ToDoList;
