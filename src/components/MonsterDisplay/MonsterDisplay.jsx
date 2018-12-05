import React ,{Component} from 'react';
import MonsterTile from '../MonsterTile/MonsterTile.jsx';
import './MonsterDisplay.css'

class MonsterDisplay extends Component {

    render() {

        let monsters = this.props.encounter.map((monster, i) => <MonsterTile monster={monster} key={i} index={i} killMonster={this.props.killMonster}/>)

        return (
            <div className="main-display">
                <div className='header-monster-display'>
                    <h1>Encounter:</h1>
                    <button
                        onClick={this.props.clearEncounter}
                        className="Clear Buttons">
                        Clear
                    </button>
                </div>

                <div className='Tile-Display'>
                    {monsters}
                </div>

                <h1 className='XP-counter'>XP: <div className="XP">{this.props.XP}</div></h1>
            </div>
        )
    }
}

export default MonsterDisplay;