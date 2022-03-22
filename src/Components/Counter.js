import * as React from "react";
import { useState } from "react";

function Counter({ price }) {
  const [counter, setCounter] = useState(0);
  const [sum, setSum] = useState(0);

  const increase = () => {
    setCounter((prev) => prev + 1);
    setSum((counter + 1) * price);
    console.log(counter);
  };
  const decrease = () => {
    setCounter((prev) => prev - 1);
    setSum((counter - 1) * price);
    console.log(counter);
  };
  return (
    <>
      <button onClick={increase}>+</button>
      <div>{counter}</div>
      <button onClick={decrease}>-</button>
      <div>Total price: {sum} AMD</div>
    </>
  );
}
export default Counter;
