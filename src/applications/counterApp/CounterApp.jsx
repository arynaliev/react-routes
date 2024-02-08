import React, { useState } from "react";
import "./counterApp.style.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-app">
      <button
        className="counter-btn"
        onClick={() => (count > 0 ? setCount(count - 1) : null)}
      >
        -
      </button>
      <h3>{count}</h3>
      <button className="counter-btn" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default CounterApp;
