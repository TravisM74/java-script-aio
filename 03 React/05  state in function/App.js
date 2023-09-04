import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [currentCount, setCurrentCount] = useState(0);
  function incrementCount() {
  const newCount = currentCount + 1;
  setCurrentCount(newCount);
  }
  return <button onClick={incrementCount}>{currentCount}
 </button>;
}
