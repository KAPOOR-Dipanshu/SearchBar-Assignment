import { useState } from "react";
import "./App.css";
import SearchBar from "./Component/SearchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Search</h1>
        <SearchBar />
      </div>
    </>
  );
}

export default App;
