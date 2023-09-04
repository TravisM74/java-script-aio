
import './App.css';

export default function App() {
  return (
    <div className="App">
      
      <MyPage />
    </div>
  );
}

function Header(){
  return(
    <header> 
        <nav>
            <img className='app-logo' width='100' src='logo192.png'></img>
        </nav>
    </header>
  )
}

const MyPage = () => {
  return(
    <div>
        <Header />
        <h1>why i like things</h1>
      <ol>
        <li> reason 1</li>
        <li> reason 2</li>
        <li> reason 3</li>
        <li> reason 4</li>
      </ol>
      <footer><small>c 2023 Bob development. all rights reserved</small></footer>
    </div>
  )
}

