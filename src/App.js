import AddToDo from "./components/addToDo/index";
import CompletedToDo from "./components/completedToDo/index";
import ToDoList from "./components/toDoList/index";

function App() {
  return (
    <div>
      <ToDoList />
      <CompletedToDo />
      <AddToDo />
    </div>
  );
}

export default App;
