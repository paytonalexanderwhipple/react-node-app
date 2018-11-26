import React ,{Component} from 'react';
import "./MonsterTile.css"

class MonsterTile extends Component {
    constructor() {
        super()

        this.state = {
            HP: 0,
            attacks: [],
            xp: 0,
        }
    }
    
    rollAttack = () => {
        let attacks = [];
        let arr = 
            this.props.monster.damageAttack ?
                this.props.monster.damageAttack.split("/"):
                ""
        for (let i = 0; i < arr.length; i++) {
            let min = Number(arr[i].split("-")[0])
            let max = Number(arr[i].split("-")[1]) + 1 
            attacks.push(Math.floor((Math.random() * (max - min)) + min))
        }
        this.setState({attacks})
    }

    componentDidMount = () => { //sets hitpoint total
        let randint = () => Math.floor((Math.random() * 7) + 1)
        let HD = Number(this.props.monster.HD.split(" ")[0])
        let HP;
        if (this.props.monster.HD.includes('hit points')) {
            this.setState({HP: HD})
            HP = HD
        } else if(HD < 1) {
            HP = Math.floor((Math.random * 4) + 1)
            this.setState({HP})
        } else {
            HP = 0;
            for (let i = 1; i <= HD; i++) {
                HP += randint()
            }
            if (this.props.monster.HD.includes('+')) {
                HP += Number(this.props.monster.HD.split(" ")[2])
            }
            this.setState({HP})
        }
        // assigns an xp value for the killing of the creature
        let xp = this.props.monster.xp
        let nums = xp.match(/\d+/g)
        let total = Number(nums[0]) + (Number(nums[1]) * HP)
        this.setState({xp: total})
    }

    hpUp = () => {
        let HP = this.state.HP
        HP++
        this.setState({HP})
    }

    hpDown = () => {
        let HP = this.state.HP
        HP--
        this.setState({HP})
    }

    handleXP = () => {

    }

    render() {

        let attacks = this.state.attacks.map((attack, i) => 
            <h2 className="attack-results" key={i}>{attack}</h2>
        )

        let render;

        if (this.props.monster.isDead) {
            render = <div></div>
        } else {
            render = (<div className="monster-tile">  
                        <h1 className="tile-name">{this.props.monster.name}</h1>
                
                        <div className="HP">
                            <h1 className="HP-display">
                                HP: {this.state.HP}
                            </h1>
                            <div className="hp-buttons">
                                <button className="down Buttons" onClick={this.hpDown}>-</button>
                                <button className="up Buttons" onClick={this.hpUp}>+</button>
                            </div>
                            <img src="https://ubisafe.org/images/skull-svg-3.png" alt="Kill it" className="skull Buttons" onClick={(event) => {this.props.killMonster(event, this.state.xp, this.props.index)}} value={this.state.xp}/>
                        </div>
                
                        <div className="Attack">
                            <button 
                                className="attack Buttons"
                                onClick={this.rollAttack}>
                                Attack
                            </button>
                            <div className="attack-display">
                                {attacks}
                            </div>
                        </div>
                    </div>)
        }

        return (
            <div>
                {render}
            </div>
        )
    }
}

export default MonsterTile;