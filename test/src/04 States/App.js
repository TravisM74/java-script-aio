
import styles from './App.css';
import {useState} from 'react';
import {Exercise} from './exercise.js'

function App() {
  const [age, setAge] = useState(0);
  const [inputText, setText] = useState('');
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState('green');

  const increaseAge = () => {
    setAge(age + 1);
    console.log(age);
  }
  const decreaseAge = () => {
    setAge(age - 1);
    console.log(age);
  }
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  }
  const setColor = () => {
    textColor === 'green' ? setTextColor('red') : setTextColor('green');
  }
  
  return (
    <div className = 'App'>
      <div style={{border:'solid'}}>
        <h1>Sate change exercise</h1>
        <button onClick={decreaseAge}>Decrease Age</button>
        <div>age :{age}</div>
        <button onClick={increaseAge}>Increase Age</button>
      </div>
      <div style={{border:'solid'}}>
        <h1>Input state</h1>
        <input type='text' onChange={handleInputChange}></input>
        <div>Copy of Input : {inputText}</div>
      </div>
      <div>
        <h1>Example 3</h1>
        <button onClick={()=>{
           setShowText(!showText)
           setColor();
        } 
         }>Show/Hide</button>
        {showText && <h1>Hi I am Bob</h1>}

      </div>
      <div>
        <h1>Example 4</h1>
        {<h1 style= {{color: textColor}}>Hi I am Bob</h1>}

      </div>
      <Exercise />
    </div>
  );
}




export default App;
