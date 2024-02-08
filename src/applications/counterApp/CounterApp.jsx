import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-app">
      <button onClick={() => (count > 0 ? setCount(count - 1) : null)}>
        -
      </button>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default CounterApp;
