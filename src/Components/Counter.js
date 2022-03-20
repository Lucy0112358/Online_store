import * as React from "react";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(prev => prev + 1);
  };
  const decrease = () => {
    setCounter(prev => prev - 1);
  };
  return (
    <>
     <button onClick={increase}>+</button>
     <div>{counter}</div>
     <button onClick={decrease}>-</button>
    </>
  );
}
export default Counter;
