import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleIncrease}>+1</button>
    </div>
  );
};

export default Counter;
