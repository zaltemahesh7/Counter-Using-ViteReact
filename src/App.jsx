import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum] = useState(15);
  function Add() {
    setNum(num1 + 1);
  }
  function Rem() {
    if (num1 === 0) {
      setNum(0);
    } else setNum(num1 - 1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h3>counter: {num1}</h3>
      <button onClick={Add}>Add Value</button>
      <button onClick={Rem}>Rem Value</button>
    </>
  );
}

export default App;
