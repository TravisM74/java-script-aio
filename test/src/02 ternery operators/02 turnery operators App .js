
import './App.css';

function App() {
  const age = 11;
  const isGreen = true;

  return (
    <div className ='App'>{ age >=18 ? <h1>OverAge</h1> : <h1>UnderAge</h1>}
     <h1 style={{color:isGreen ? 'green' : 'red', backgroundColor:'gold'}}>This has Color</h1>
     <h1>{isGreen && <button>a Button</button>}</h1>
    </div>
  );
}



export default App;
