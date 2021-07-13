import "./App.css";
import React from "react";
import { useState } from "react";
import User from "./User";

function App() {
  const [count, setCount] = useState(false);
  return (
    <div>
      <h1>Is friend : {count.toString()}</h1>
      <button onClick={() => setCount(!count)}>Toggle</button>
      <User count={count}></User>
    </div>
  );
}

export default App;
