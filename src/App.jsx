import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then(setTodos);
  }, []);

  return (
    <div className="app">
      <h1>Todos</h1>
      {todos.length === 0 ? (
        <p>No todos here...</p>
      ) : (
        todos.results.map((todo, index) => <li key={index}>{todo.name}</li>)
      )}
    </div>
  );
}

export default App;
