import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ShowClock />
    </div>
  );
}


export class ShowClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.getNewTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  getNewTime() {
    this.setState({date: new Date()});
  }
  render() {
    return (
      <h1>
        The current time is {this.state.date.toLocaleTimeString()}
      </h1>
    );
    }
 }