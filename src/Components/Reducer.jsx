import React, { useReducer, useState } from "react";

const intState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, intState);

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> Increment </button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> Increment </button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> Increment </button>
    </div>
  );
};

export default Reducer;
