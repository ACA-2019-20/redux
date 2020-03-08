import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, sub, reset } from "./actions";

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add());
  };

  const handleSub = () => {
    dispatch(sub());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <button onClick={handleReset}>RESET</button>
    </>
  );
}

export default App;
