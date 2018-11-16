import React ,{Component} from 'react'

class InputBox extends Component {
    constructor() {
        super()
        
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div>
                <label>NAME:</label>
                    <input 
                        name="name" 
                        onChange={this.props.handleChange}/>
                <label>NO.APPEARING:</label>
                    <input 
                        name="noAppearing" 
                        onChange={this.props.handleChange}/>
                <label>ARMOR CLASS:</label>
                    <input 
                        name="AC" 
                        onChange={this.props.handleChange}/>
                <label>MOVE:</label>
                    <input 
                        name="move" 
                        onChange={this.props.handleChange}/>
                <label>HIT DICE:</label>
                    <input 
                        name="HD" 
                        onChange={this.props.handleChange}/>
                <label>NO.OF ATTACKS:</label>
                    <input 
                        name="noOfAttacks" 
                        onChange={this.props.handleChange}/>
                <label>DAMAGE/ATTACK:</label>
                    <input 
                        name="damageAttack" 
                        onChange={this.props.handleChange}/>
                <label>SPECIAL ATTACKS:</label>
                    <input 
                        name="specialAttacks" 
                        onChange={this.props.handleChange}/>
                <label>SPECIAL DEFENCES:</label>
                    <input 
                        name="specialDefenses" 
                        onChange={this.props.handleChange}/>
                <label>MAGIC RESISTANCE:</label>
                    <input 
                        name="magicResistance" 
                        onChange={this.props.handleChange}/>
                <label>INTELLIGENCE:</label>
                    <input 
                        name="intellegence"
                        onChange={this.props.handleChange}/>
                <label>ALIGNMENT:</label>
                    <input 
                        name="alignment" 
                        onChange={this.props.handleChange}/>
                <label>SIZE:</label>
                    <input 
                        name="size" 
                        onChange={this.props.handleChange}/>
                <label>PSIONIC ABILITY:</label>
                    <input 
                        name="psionicAbility" 
                        onChange={this.props.handleChange}/>
                <label>Attack/Defence Modes:</label>
                    <input 
                        name="attackDefenceModes" 
                        onChange={this.props.handleChange}/>
                <label>X.P.</label>
                    <input 
                        name="xp"
                        onChange={this.props.handleChange}/>
            </div>
        )
    }
}

export default InputBox;