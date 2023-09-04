
import styles from './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Home} from './home.js';
import {Menu} from './menu.js';
import {Contact} from './contact.js';
import {Error} from './error.js';
import {NavBar} from './navbar.js';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {
  const client = new QueryClient();
  return (
    <div className='App'>
      {/*<QueryClientProvider client={client}> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      {/*</QueryClientProvider>*/}
    </div>
  );
}

export default App;
