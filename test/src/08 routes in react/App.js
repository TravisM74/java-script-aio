
import styles from './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Home} from './home.js';
import {Menu} from './menu.js';
import {Contact} from './contact.js';
import {Error} from './error.js';
import {NavBar} from './navbar.js'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
