import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Problem under is infinite fetches
  fetch("http://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then(setTodos);

  return (
    <div className="app">
      <h1>Todos</h1>
      {todos.length === 0 ? (
        <p>No todos here...</p>
      ) : (
        todos.map((todo, index) => <li key={index}>{todo.title}</li>)
      )}
    </div>
  );
}

export default App;
