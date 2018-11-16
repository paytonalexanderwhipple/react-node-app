import React, { Component } from 'react';
import axios from "axios";
import Header from "./components/Header.jsx";
import Input from "./components/InputBox.jsx"
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: {},
      input: {},
    }
  }
  
  deleteMonster(name) {
    axios.delete(`/api/dungeon?name=kobald`)
  }

  render() {

    return (
      <div>
        <Header />
        <button onClick={this.deleteMonster}>delete</button>
      </div>
    );
  }
}

export default App;
