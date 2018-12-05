import React ,{Component} from 'react'
import "./DisplayBox.css";
import ReactRevealText from 'react-reveal-text';

class DisplayBox extends Component {

    render() {

        return (
            <div className="Display-box">
                <h2 className="stats">Name: 
                    <input 
                        className="display-input input"
                        onChange={this.props.handleChange}
                        />
                </h2>
                <div className="stat-display">

                    <h2 className="stats">NO.APPEARING:  
                        <ReactRevealText className="stats-appearing"show={this.props.noAppearing} text={this.props.noAppearing ? this.props.noAppearing : " "} />
                    </h2>

                    <h2 className="stats">ARMOR CLASS:  
                        <ReactRevealText className="stats-appearing"show={this.props.AC} text={this.props.AC ? this.props.AC : " "} />
                    </h2>

                    <h2 className="stats">MOVE:  
                        <ReactRevealText className="stats-appearing"show={this.props.move} text={this.props.move ? this.props.move : " "}/>
                    </h2>

                    <h2 className="stats">HIT DICE:  
                        <ReactRevealText className="stats-appearing"show={this.props.HD} text={this.props.HD ? this.props.HD : " "}/>
                    </h2>

                    <h2 className="stats">NO.OF ATTACKS:  
                        <ReactRevealText className="stats-appearing"show={this.props.noOfAttacks} text={this.props.noOfAttacks ? this.props.noOfAttacks : " "}/>
                    </h2>

                    <h2 className="stats">DAMAGE/ATTACK:  
                        <ReactRevealText className="stats-appearing"show={this.props.damageAttack} text={this.props.damageAttack ? this.props.damageAttack : " "}/>
                    </h2>

                    <h2 className="stats">SPECIAL ATTACKS:  
                        <ReactRevealText className="stats-appearing"show={this.props.specialAttacks} text={this.props.specialAttacks ? this.props.specialAttacks : " "}/>
                    </h2>

                    <h2 className="stats">SPECIAL DEFENCES:  
                        <ReactRevealText className="stats-appearing"show={this.props.specialDefenses} text={this.props.specialDefenses ? this.props.specialDefenses : " "}/>
                    </h2>

                    <h2 className="stats">MAGIC RESISTANCE:  
                        <ReactRevealText className="stats-appearing"show={this.props.magicResistance} text={this.props.magicResistance ? this.props.magicResistance : " "}/>
                    </h2>

                    <h2 className="stats">INTELLIGENCE:  
                        <ReactRevealText className="stats-appearing"show={this.props.intelligence} text={this.props.intelligence ? this.props.intelligence : " "}/>
                    </h2>

                    <h2 className="stats">ALIGNMENT:  
                        <ReactRevealText className="stats-appearing"show={this.props.alignment} text={this.props.alignment ? this.props.alignment : " "}/>
                    </h2>

                    <h2 className="stats">SIZE:  
                        <ReactRevealText className="stats-appearing"show={this.props.size} text={this.props.size ? this.props.size : " "}/>
                    </h2>

                    <h2 className="stats">PSIONIC ABILITY:  
                        <ReactRevealText className="stats-appearing"show={this.props.psionicAbility} text={this.props.psionicAbility ? this.props.psionicAbility : " "}/>
                    </h2>

                    <h2 className="stats attackDefence">Attack/Defence Modes:  
                        <ReactRevealText className="stats-appearing attackDefence-result"show={this.props.attackDefenceModes} text={this.props.attackDefenceModes ? this.props.attackDefenceModes : " "}/>
                    </h2>

                    <h2 className="stats">X.P.:   
                        <ReactRevealText className="stats-appearing"show={this.props.xp} text={this.props.xp ? this.props.xp : " "}/>
                    </h2>
                </div>
                <div className="buttons">
                    <button 
                        className="delete Buttons"
                        name={this.props.name}
                        onClick={this.props.deleteMonster}>
                        Delete
                    </button>
                    <button
                        className="generate-encounter Buttons"
                        onClick={this.props.monster.name ? this.props.generateEncounter : () => {}}>
                            Generate Encounter
                    </button>
                </div>
            </div>
        )
    }
}

export default DisplayBox;