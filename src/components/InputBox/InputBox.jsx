import React ,{Component} from 'react';
import './InputBox.css'

class InputBox extends Component {
    
    render() {
        return (
            <div className='main'>
                <div className="inputs">
                    <div className="input-box">
                        <h1 className="label">NAME:</h1>
                        <input 
                            name="name" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">NO.APPEARING:</h1>
                        <input 
                            name="noAppearing" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">ARMOR CLASS:</h1>
                        <input 
                            name="AC" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">MOVE:</h1>
                        <input 
                            name="move" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">HIT DICE:</h1>
                        <input 
                            name="HD" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">NO.OF ATTACKS:</h1>
                        <input 
                            name="noOfAttacks" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">DAMAGE/ATTACK:</h1>
                        <input 
                            name="damageAttack" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">SPECIAL ATTACKS:</h1>
                        <input 
                            name="specialAttacks" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">SPECIAL DEFENCES:</h1>
                        <input 
                            name="specialDefenses" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">MAGIC RESISTANCE:</h1>
                        <input 
                            name="magicResistance" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">INTELLIGENCE:</h1>
                        <input 
                            name="intelligence"
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">ALIGNMENT:</h1>
                        <input 
                            name="alignment" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">SIZE:</h1>
                        <input 
                            name="size" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">PSIONIC ABILITY:</h1>
                        <input 
                            name="psionicAbility" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">Attack/Defence Modes:</h1>
                        <input 
                            name="attackDefenceModes" 
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                    <div className="input-box">
                        <h1 className="label">X.P.</h1>
                        <input 
                            name="xp"
                            onChange={this.props.handleChange}
                            className="input"/>
                    </div>
                </div>
                <div className="buttons">
                    <button 
                        className="Buttons Create"
                        onClick={this.props.postMonster}>
                            Create
                    </button>
                    <button 
                        className="Buttons Update"
                        onClick={this.props.putMonster}>
                            Update
                    </button>
                </div>
            </div>
        )
    }
}

export default InputBox;