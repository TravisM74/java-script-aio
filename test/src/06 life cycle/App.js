
import styles from './App.css';
import {useState, useEffect} from 'react';
import {Text} from './text.js';

function App() {
  const [showText ,setShowText] = useState(false);

  useEffect(() => {
    console.log('COMPONENT MOUNTED');

    return () => {
      console.log('COMPONENT UNMOUNTED');
    };
  }, []);

  return (
    <div className='App'>
      <div>
        <button onClick={() => {setShowText(!showText);}}>show text</button>
        {showText && <Text />}
      </div>
    </div>
  );
}

export default App;
