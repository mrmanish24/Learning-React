import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }

  return (
    <div
      style={{
        backgroundColor: "teal",
        height: "100vh",
      }}
    >
      <h1>Counter: {count}</h1>
      <button onClick={Increment}>Increment + </button>
      <button onClick={Decrement}>Decrement - </button>
    </div>
  );
};

export default Counter;
