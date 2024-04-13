// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const App = () => {
  const[count, setCount] = useState(100);
  // console.log(count);
  // console.log(setCount);
  const handleClickInc = () => {
    setCount(count+10);
  }
  const handleClickDec = () => {
    setCount(count-10);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  );
}

export default App;
