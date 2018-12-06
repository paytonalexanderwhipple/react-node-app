import React ,{Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { handleInput } from '../../ducks/reducer.js';
import './InputBox.css'

class InputBox extends Component {
    
    postMonster = () => {
        axios.post('/api/dungeon', this.props.monsterInput)
            .catch(error => alert(`(${error}) Database only accepts unique names.`))
      }

    putMonster = () => {
        let promise = axios.get(`/api/dungeon/${this.props.monsterInput.name}`)
        promise.then((res) => {
          axios.put(`/api/dungeon/${res.data.id}`, this.props.monsterInput)
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
                            name="no_appearing" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">ARMOR CLASS:</h1>
                        <input 
                            name="ac" 
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
                            name="hd" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">NO.OF ATTACKS:</h1>
                        <input 
                            name="no_of_attacks" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">DAMAGE/ATTACK:</h1>
                        <input 
                            name="damage_attack" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">SPECIAL ATTACKS:</h1>
                        <input 
                            name="special_attacks" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">SPECIAL DEFENCES:</h1>
                        <input 
                            name="special_defenses" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">MAGIC RESISTANCE:</h1>
                        <input 
                            name="magic_resistance" 
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
                            name="psionic_ability" 
                            onChange={event => {this.props.handleInput(event)}}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">Attack/Defence Modes:</h1>
                        <input 
                            name="attack_defence_modes" 
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