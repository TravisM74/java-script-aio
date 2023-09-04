
import './App.css';

export default function App() {
  return (
    <div className="App">
      <MyPage />
    </div>
  );
}
function MyPage (){
  return (
    <div>
      <Header />
      <Page />
      <Footer />
    </div>
    )
  
}
function Header(){
  return(
    <header> 
        <nav>
            <img className='App-logo' src='logo192.png'></img>
        </nav>
    </header>
  )
}
function Footer(){
  return (
     <footer><small>c 2023 Bob development. all rights reserved</small></footer>
  )
}
const Page = () => {
  return(
    <div>   
      <h1>Why i like things</h1>
      <ol>
        <li> reason 1</li>
        <li> reason 2</li>
        <li> reason 3</li>
        <li> reason 4</li>
      </ol>
    </div>
  )
}

