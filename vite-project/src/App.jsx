import React, { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState("");

  const handleClick = (value) => {
    setNumber(prevNumber => prevNumber + value);
  };

  const equal = () => {
    try {
      setNumber(eval(number));
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <>
      <input type="text" value={number} readOnly />
      {[...Array(10)].map((_,i)=>(
        <button key={i} onClick={()=> handleClick(i)}>{i}</button>
      ))}

      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('+')}>+</button>

      <button onClick={equal}>=</button>
    </>
  );
};

export default App;