
import './App.css';
import {User} from './User.js'
import {Planets} from './Planets.js'

function App() {
  const names = [{name:'bill', age:21},{name:'bob', age:27},{name:'dave', age:49}];
  const planets = [
    {name:'earth', isGasPlanet: false},
    {name:'Mars', isGasPlanet: false},
    {name:'neptune', isGasPlanet: true},
    {name:'uranus', isGasPlanet: true},
  ]
  return (
    <div className ='App'>
      {names.map((name,key) => {
        return (
          <div style={{borderStyle: 'solid'}}> 
            <h1 key = {key}>name: {name.name} </h1>
            <h1>age: {name.age}</h1> 
          </div>
        )}
      )}

      <div style={{borderStyle: 'solid'}}>
      {names.map((name,key) => {
                return (
                  <User name={name.name} age={name.age} />
                )}
              )}
      </div>   
      <div style={{borderStyle: 'solid', backgroundColor: 'grey'}}>
        <h1>Gass Planets</h1>
        {planets.map((planet,key) => planet.isGasPlanet && <Planets name={planet.name} /> 
        
        )}
        <h1>Non-Gass Planets</h1>
        {planets.map((planet,key) =>{
          if (!planet.isGasPlanet) return <Planets name={planet.name} /> 
        }
        )}
      </div>   

    </div> 
  );
}



export default App;
