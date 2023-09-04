
import styles from './App.module.css';

function App() {
  
  return (
    <div>
      <UserDisplay name = 'Bob' age ={21} email ='bob@home.com' />
      <UserDisplay name = 'dave' age ={22} email ='dave@home.com' />
      <Job salary= {10000} company = 'gogo ' position = 'manager' />
      <Job salary= {1000} company = 'dianaco ' position = 'cleaner' />
    </div>
  );
}

const UserDisplay = (props) => {
 
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <div>{props.email}</div>
    </div>
  );
    
}

const Job = (props) => {
 
  return (
    <div>
      <h1>salary :{props.salary}</h1>
      <h1>position :{props.position}</h1>
      <h1>company :{props.company}</h1>
    </div>
  );   
}

export default App;
