
import styles from './App.css';
import {useState, createContext} from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Home} from './home.js';
import {Profile} from './profile.js';
import {Contact} from './contact.js';
import {Error} from './error.js';
import {NavBar} from './navbar.js'

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState('Bob');

  return (
    <div className='App'>
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
