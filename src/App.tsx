import { useState } from "react";
import Idea from "./components/Idea";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Barber Shop</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>There will be some information about project.</p>
        <Idea />
      </div>
    </>
  );
}

export default App;
