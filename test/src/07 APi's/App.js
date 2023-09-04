
import styles from './App.css';
import {useState, useEffect} from 'react';


function App() {
  useEffect(()=> {
      loadFact();
    return () => { 

    }
  },[])
  const [catFact, setFact] = useState('');
  const [age , setAge] = useState();
  const [name, setName] = useState('name');
  const [excuse, setExcuse] = useState('');
  
  const loadFact = () => {
    fetch('https://catfact.ninja/fact')
      .then((res)=> res.json())
      .then((data) => {
        setFact(data.fact);
      });   
  }
  const getPrediction = () => {
    fetch('https://api.agify.io/?name=' + name)
      .then((res)=> res.json())
      .then((data) => {
        setAge(data.age);
      });
  }
  const getExcuse = (from) => {
    fetch('https://excuser-three.vercel.app/v1/excuse/' + from)
      .then((res)=> res.json())
      .then((data) => {
        setExcuse(data[0].excuse);
      });
  }


  return (
    <div className='App'>
      <div style={{border: 'solid',backgroundColor: 'yellow'}}> 
        <h1>Random Cat Facts..</h1>
        <button onClick={loadFact}>Generate Cat fact</button>
        <p>{catFact}</p>
      </div>
        <div style={{border: 'solid',backgroundColor: 'grey'}}> 
          <input onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Name'>
          </input>
          <p>Age Prediction :{age}</p>
          <button onClick={getPrediction}>Predict Age</button>
        </div>
        <div style={{border: 'solid',backgroundColor: 'grey'}}>
          <h1>The Excuser</h1>
          <div>
            <span>for what occasion </span>
            <button onClick={() =>getExcuse('party/')}>Party</button>
            <button onClick={() =>getExcuse('family/')}>Family</button>
            <button onClick={() =>getExcuse('office/')}>Office</button>
          </div>
          <h2>{excuse}</h2>
        </div>   
    </div>
  );
}


export default App;
