import {Component} from 'react';
import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      
    </div>
  );
}
export class Counter extends Component {
  constructor(props) {
  super(props);
  this.state = {
    currentCount: 0,
    };
  this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount() {
    const newCount = this.state.currentCount + 1;
    this.setState({ currentCount: newCount });
    }
  render() {
    return (
      <button onClick={this.incrementCount}>
      {this.state.currentCount}
      </button>
    );
  }
 }
 