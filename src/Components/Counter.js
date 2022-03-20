import * as React from "react";
import { useState } from "react";

function Counter(price) {
    
  const [counter, setCounter] = useState(0);
  const [sum, setSum] = useState(1);

  
  console.log(sum,25252525)
  const increase = () => {  
    setCounter(prev => prev + 1);
    
    setSum(price => price * counter)
    
  };
  const decrease = () => {
    setCounter(prev => prev - 1);
    setSum(price => price * counter)
  };
  return (
    <>
     <button onClick={increase}>+</button>
     <div>{counter}</div>
     <button onClick={decrease}>-</button>
    <div>{sum}</div>
    </>
  );
}
export default Counter;
