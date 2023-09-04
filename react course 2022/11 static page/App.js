
import './App.css';

export default function App() {
  
  return (
    <div className="App">
      <Facts />
    </div>
  );
}

const Facts = () => {
  return(
    <div>
      <img width='100px' src='./logo192.png'></img>
      <h1 className='header'>Facts about React</h1>
      <h3>here they are</h3>
      <div style={{textAlign: 'left'}}>
        <ul>
          <li>fact 1</li>
          <li>fact 2</li>
          <li>fact 3</li>
        </ul>
      </div>
    </div>
  )
}
  
  
  

