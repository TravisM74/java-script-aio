
import {useState} from 'react';
import './App.css';
import React from 'react';

export default function App() {
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Weather />
    </div>
  );
}

export class Weather extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
    location: 'Chicago',
      current_condition: {
      temp_C: 0,
      windspeedKmph: 0,
      precipMM: 0,
      },
    };
  }
  render() {
  return (
  <div>
    <h1>Today's weather for {this.state.location}</h1>
    <ul>
      <li>temperature: {this.state.current_condition.temp_C} C</li>
      <li>wind speed: {this.state.current_condition. windspeedKmph} km/h</li>
      <li>precipitation amount: {this.state.current_condition.precipMM} mm</li>
    </ul>
  </div>
  );
  }
 }
 