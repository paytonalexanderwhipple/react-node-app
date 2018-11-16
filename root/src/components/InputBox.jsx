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
                NAME: <input />
                NO.APPEARING: <input />
                ARMOR CLASS: <input />
                MOVE: <input />
                HIT DICE: <input />
                NO.OF ATTACKS: <input />
                SPECIAL ATTACKS: <input />
                DAMAGE/ATTACK: <input />
                SPECIAL ATTACKS: <input />
                SPECIAL DEFENCES: <input />
                MAGIC RESISTANCE: <input />
                INTELLIGENCE: <input />
                ALIGNMENT: <input />
                SIZE: <input />
                PSIONIC ABILITY: <input />
                Attack/Defence Modes: <input />
            </div>
        )
    }
}

export default InputBox;