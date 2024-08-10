import React, { useReducer, useState } from 'react';

const Red = () => {
  const [initialCount, setInitialCount] = useState(55);

  const reducer = (count, action) => {
    switch (action.type) {
      case 'set':
        return action.payload;
      case 'inc':
        return count + 1;
      case 'dec':
        return count - 1;
      default:
        return count;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialCount);

  return (
    <div>
      <input
        type="number"
        value={initialCount}
        onChange={(e) => {
          setInitialCount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: 'set', payload: initialCount });
        }}
      >
        submit
      </button>
      <br />
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      {count}
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
    </div>
  );
};

export default Red;
