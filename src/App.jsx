import { useState } from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEqual = () => {
    if(!input) {
      setResult("Error");
      return;
    }

    try {
      const evalResult = eval(input);

      if (Number.isNaN(evalResult)) {
        setResult("NaN");
      } else if (!Number.isFinite(evalResult)) {
        setResult("Infinity");
      } else {
        setResult(evalResult);
      }
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className='container'>
      <h1>React Calculator</h1>

      <input type='text' value={input} readOnly />

      <div className='result'>{result}</div>

      <div className='buttons'>
        {["7", "8", "9", "+"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}

        {["4", "5", "6", "-"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}

        {["1", "2", "3", "*"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}

        {/* <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick("/")}>/</button> */}

        {["C", "0", "=", "/"].map((btn) => (
          <button
            key={btn}
            onClick={() => 
              btn === "C" ? handleClear() :
              btn === "=" ? handleEqual() :
              handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}


      </div>
    </div>
  );

}

export default App
