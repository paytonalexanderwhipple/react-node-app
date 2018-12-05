import React, { Component } from 'react';
import axios from "axios";
import Header from "./components/Header/Header.jsx";
import InputBox from "./components/InputBox/InputBox.jsx";
import DisplayBox from './components/DisplayBox/DisplayBox.jsx';
import MonsterDisplay from './components/MonsterDisplay/MonsterDisplay.jsx';
import SpellBook from './components/SpellBook/SpellBook.jsx';
import './App.css';
import './reset.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsterInput: {

      },
      monsterDisplay: {

      },
      testMonster: {
        "name": "Kobald",
        "noAppearing": "5-20",
        "AC": "8",
        "move": "6\"",
        "HD": "3 + 3",
        "noOfAttacks": "1",
        "damageAttack": "1-2/1-8/2-12",
        "specialAttacks": "none",
        "specialDefenses": "none",
        "magicResistance": "none",
        "intelligence": "low",
        "alignment": "Chaotic Evil",
        "size": "L",
        "psionicAbility": "89-121",
        "attackDefenceModes": "a,c,d,g,j",
        "xp": "20+5/hp",
        "id": 0
      },
      encounter: [
        //full of monsters!
      ],
      XP: 0,
    }
  }

  killMonster = (event, xp, index) => {
    let newXP = this.state.XP + xp
    this.setState({XP: newXP})
    let newArr = []
    for (let i = 0; i < this.state.encounter.length; i++) {
      newArr.push(Object.assign({}, this.state.encounter[i]))
    }
    for (let i = 0; i < newArr.length; i++) {
      newArr[i].id = i
    }
    newArr.forEach((monster, i) => {
      if (monster.id === index) {
        monster.isDead = true
      }
    })
    this.setState({encounter: newArr})
  }

  generateEncounter = () => {
    let encounter = [...this.state.encounter];
    if (this.state.monsterDisplay.noAppearing.length > 1) {
      let min = Number(this.state.monsterDisplay.noAppearing.split("-")[0])
      let max = Number(this.state.monsterDisplay.noAppearing.split("-")[1])
      let randInt = Math.floor((Math.random() * (max - min)) + min)
      for (let i = 0; i < randInt; i++) {
        encounter.push(this.state.monsterDisplay)
      }
    } else {
      encounter.push(this.state.monsterDisplay)
    }
    this.setState({encounter})
  }
  
  clearEncounter = () => {
    this.setState({encounter: []})
    this.setState({XP: 0})
  } 

  deleteMonster(event) {
    axios.delete(`/api/dungeon?name=${event.target.name}`)
  }

  postMonster = () => {
    axios.post('/api/dungeon', this.state.monsterInput)
  }

  putMonster = () => {
    let promise = axios.get(`/api/dungeon/${this.state.monsterInput.name}`)
    promise.then((res) => {
      console.log(res.data.id)
      axios.put(`/api/dungeon/${res.data.id}`, this.state.monsterInput)
    })
  }

  handleChangeInput = (event) => {
    let newObject = Object.assign({}, this.state.monsterInput)
    newObject[event.target.name] = event.target.value;
    this.setState({monsterInput: newObject})
  }

  handleChangeDisplay = (event) => {
    let promise = axios.get(`/api/dungeon/${event.target.value}`)
    promise.then((res) => {
      this.setState({monsterDisplay: res.data})
    })
  }

  render() {

    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <div className="MonsterDisplay">
            <MonsterDisplay
              monster={this.state.testMonster}
              encounter={this.state.encounter}
              clearEncounter={this.clearEncounter}
              killMonster={this.killMonster}
              XP={this.state.XP}/>
          </div>

          <div className="input-display">

            <div className="InputBox">
              <InputBox 
                handleChange={this.handleChangeInput}
                postMonster={this.postMonster}
                putMonster={this.putMonster}/>
            </div>
            
            <div className="lower-display">
              <div className="DisplayBox">
                <DisplayBox 
                  handleChange={this.handleChangeDisplay}
                  deleteMonster={this.deleteMonster}
                  generateEncounter={this.generateEncounter}
                  monster={this.state.monsterDisplay}
                  name={this.state.monsterDisplay.name}
                  noAppearing={this.state.monsterDisplay.noAppearing}
                  AC={this.state.monsterDisplay.AC}
                  move={this.state.monsterDisplay.move}
                  HD={this.state.monsterDisplay.HD}
                  noOfAttacks={this.state.monsterDisplay.noOfAttacks}
                  damageAttack={this.state.monsterDisplay.damageAttack}
                  specialAttacks={this.state.monsterDisplay.specialAttacks}
                  specialDefenses={this.state.monsterDisplay.specialDefenses}
                  magicResistance={this.state.monsterDisplay.magicResistance}
                  intelligence={this.state.monsterDisplay.intelligence}
                  alignment={this.state.monsterDisplay.alignment}
                  size={this.state.monsterDisplay.size}
                  psionicAbility={this.state.monsterDisplay.psionicAbility}
                  attackDefenceModes={this.state.monsterDisplay.attackDefenceModes}
                  xp={this.state.monsterDisplay.xp}/>
              </div>

              <div className="SpellBook">
                <SpellBook />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
