import React, { useState } from "react"
import './App.css';


function App() {
  const [count,setCount]=useState(0)
  return (
    <div className="App">
      <p>
        {count}
      </p>
      <button onClick={() => setCount(count+1)}>
        Add
      </button>
      <button onClick={() => setCount(count-1)}>
        Sub
      </button>
      
    </div>
  );
}

export default App;
