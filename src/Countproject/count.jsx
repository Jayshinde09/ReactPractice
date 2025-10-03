import { useState } from "react";

function CountProject() {
  const [count, setCount] = useState(0);

  function show() {
    setCount(count + 1);
  }

  function unit() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count the number: {count}</h1>
      <button onClick={show}>Increm
        ent</button>
      <button onClick={unit}>Decrement</button>
    </div>
  );
}

export default CountProject;
