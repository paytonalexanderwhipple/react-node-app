import React ,{Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { handleInput } from '../../ducks/reducer.js';
import './InputBox.css'

class InputBox extends Component {
    
    postMonster = () => {
        axios.post('/api/dungeon', this.props.monsterInput)
      }

    putMonster = () => {
        let promise = axios.get(`/api/dungeon/${this.state.monsterInput.name}`)
        promise.then((res) => {
          console.log(res.data.id)
          axios.put(`/api/dungeon/${res.data.id}`, this.state.monsterInput)
        })
    }

    render() {
        return (
            <div className='main'>
                <div className="inputs">
                    <div className="input-box">
                        <h1 className="label">NAME:</h1>
                        <input 
                            name="name" 
                            onChange={event => this.props.handleInput(event)}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">NO.APPEARING:</h1>
                        <input 
                            name="noAppearing" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">ARMOR CLASS:</h1>
                        <input 
                            name="AC" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">MOVE:</h1>
                        <input 
                            name="move" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">HIT DICE:</h1>
                        <input 
                            name="HD" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">NO.OF ATTACKS:</h1>
                        <input 
                            name="noOfAttacks" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">DAMAGE/ATTACK:</h1>
                        <input 
                            name="damageAttack" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">SPECIAL ATTACKS:</h1>
                        <input 
                            name="specialAttacks" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">SPECIAL DEFENCES:</h1>
                        <input 
                            name="specialDefenses" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">MAGIC RESISTANCE:</h1>
                        <input 
                            name="magicResistance" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">INTELLIGENCE:</h1>
                        <input 
                            name="intelligence"
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">ALIGNMENT:</h1>
                        <input 
                            name="alignment" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">SIZE:</h1>
                        <input 
                            name="size" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">PSIONIC ABILITY:</h1>
                        <input 
                            name="psionicAbility" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">Attack/Defence Modes:</h1>
                        <input 
                            name="attackDefenceModes" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">X.P.</h1>
                        <input 
                            name="xp"
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                </div>
                <div className="buttons">
                    <button 
                        className="Buttons Create"
                        onClick={this.postMonster}>
                            Create
                    </button>
                    <button 
                        className="Buttons Update"
                        onClick={this.putMonster}>
                            Update
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { monsterInput } = state
    return {
        monsterInput
    }
}

export default connect(mapStateToProps, { handleInput })(InputBox);