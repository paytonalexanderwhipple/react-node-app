import React, { Component } from 'react';
import axios from "axios";
import Header from "./components/Header.jsx";
import InputBox from "./components/InputBox.jsx";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsterInput: {

      },
      monsterDisplay: {

      },
    }
  }
  
  deleteMonster(name) {
    axios.delete(`/api/dungeon?name=${name}`)
  }

  handleChangeInput = (event) => {
    let newObject = Object.assign({}, this.state.monsterInput)
    newObject[event.target.name] = event.target.value;
    this.setState({monsterInput: newObject})
  }

  render() {

    return (
      <div>
        <Header />
        <InputBox handleChange={this.handleChangeInput}/>
      </div>
    );
  }
}

export default App;
