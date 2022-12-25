import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState({ val: 0 });

  const countUp = () => {
    setCount((prevstate) => ({
      val: prevstate.val + 1
    }));
  };

  return (
    <>
      <p>現在のカウント数: {count.val}</p>
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Example;
