import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInput = (event) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(search);
  };

  useEffect(() => {
    if (!searchQuery) return;

    fetch(`https://swapi.dev/api/${searchQuery}/`)
      .then((response) => response.json())
      .then((item) => setPeople(item.results));
  }, [searchQuery]);

  return (
    <div className="app">
      <h2>Search for &quot;people&quot; or &quot;starships&quot;</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={handleSearchInput}
          value={search}
        />
        <button type="submit">Search</button>
      </form>
      {searchQuery ? (
        people.map((person, index) => <li key={index}>Name: {person.name}</li>)
      ) : (
        <p>No search made yet</p>
      )}
    </div>
  );
}

export default App;
