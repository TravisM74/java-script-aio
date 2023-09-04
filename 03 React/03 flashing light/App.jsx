import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <>
      <Flashlight />
    </>
  )
}
export function Flashlight() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <Lightbulb glowing={isOn} />
      <button onClick={() => setIsOn(!isOn)}>Change State</button>
      <button onClick={() => setIsOn(false)}>Turn off</button>
    </div>
  );
} 
function Lightbulb(props) {
  return (
    <div>
      <div
      className="bulb"
      style={{
      width: '100px',
      height: '100px',
      backgroundColor: props.glowing ? 'yellow' : 'black',
      }}
      />
    </div>
  );
 }

export default App
