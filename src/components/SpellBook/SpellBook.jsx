import React ,{Component} from 'react';
import axios from 'axios';
import {findBestMatch} from 'string-similarity';
import './SpellBook.css'
import Page from '../Page/Page.jsx'

class SpellBook extends Component {
    constructor() {
        super()
        
        this.state = {
            spell: {},
            page: 0,
            searchName: "",
        }
    }

    pageUp = () => {
        if (this.state.page <= 319) {
            var page = this.state.page + 1;
            this.setState({page})
            this.getSpells(page)
        }
    }

    pageDown = () => {
        let page = this.state.page - 1;
        if (page >= 1) {
            this.setState({page})
            this.getSpells(page)
        } else if (page === 0) {
            this.setState({page})
        }
    }

    getSpells = (page) => {
        let promise = axios.get(`http://www.dnd5eapi.co/api/spells/${page}/`);
        promise.then((res) => {
            let spell = this.processSpell(res.data) 
            this.setState({spell})
        })
    }

    updateName = (event) => {
        this.setState({searchName: event.target.value})
    }

    getSearchSpell = () => {
        let nameArr = this.state.searchName.match(/(\w+)/g)
        for (let i = 0; i < nameArr.length; i++) {
            if (nameArr[i].toLowerCase() !== "of" && nameArr[i].toLowerCase() !== "with" && nameArr[i].toLowerCase() !== "to" && nameArr[i].toLowerCase() !== "in" && nameArr[i].toLowerCase() !== "or") {
                nameArr[i] = nameArr[i].toLowerCase()
                nameArr[i] = nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1)
            } else {
                nameArr[i] = nameArr[i].toLowerCase()
            }
        }
        let name = this.state.searchName.includes("/") ? nameArr.join("/") : nameArr.join("+")
        let promise = axios.get(`http://www.dnd5eapi.co/api/spells/?name=${name}`)
        promise.then((res) => {
            if (res.data.results[0]) {
                let promise2 = axios.get(res.data.results[0].url) 
                promise2.then((res) => {
                    let spell = this.processSpell(res.data)
                    this.setState({spell, page: spell.index})})
            }
        })
    }

    getClosestSpell = () => {
        let promise = axios.get(`http://www.dnd5eapi.co/api/spells/`)
        promise.then((res) => {
            let spellNames = res.data.results.map((spell) => spell.name)
            let bestMatch = findBestMatch(this.state.searchName, spellNames).bestMatch.target
            bestMatch = this.state.searchName.includes("/") ? bestMatch.replace(/\s/g, '/') : bestMatch.replace(/\s/g, "+")
            let promise2 = axios.get(`http://www.dnd5eapi.co/api/spells/?name=${bestMatch}`)
            promise2.then((res) => {
                let promise3 = axios.get(res.data.results[0].url)
                promise3.then((res) => {
                    let spell = this.processSpell(res.data)
                    this.setState({spell, page: spell.index})
                })
            })
        })
    }

    processSpell = (spell) => {
        for (let i = 0; i < spell.desc.length; i++) {
            spell.desc[i] = spell.desc[i].replace(/â€™/g, "'")
            spell.desc[i] = spell.desc[i].replace(/â€\ufffd/g, "")
            spell.desc[i] = spell.desc[i].replace(/â€œa/g, "a")
        }
        if (spell.higher_level) {
            spell.higher_level[0] = spell.higher_level[0].replace(/â€™/g, "'")
        }
        if (spell.material) {
            spell.material = spell.material.replace(/â€™/g, "'")
        }
        if(spell.level === -1) {
            spell.level = 0
        }
        
        return spell
    }
    
    render() {
        return (
            <div className="spellBook">
                <div className="spellBook-display">
                  <Page page={this.state.page} spell={this.state.spell}/>
                </div>

                <div className="pageSelect">
                    <button className="Buttons pageDown" onClick={this.pageDown}>-</button>
                    <p className="page">{this.state.page}</p>
                    <button className="Buttons pageUp" onClick={this.pageUp}>+</button>
                </div>

                <div className="search">
                    <input className='input search-input' onChange={this.updateName} />
                    <button 
                        className="Buttons"
                        onClick={this.getClosestSpell}>
                        Search
                    </button>
                </div>
            </div>
        )
    }
}

export default SpellBook;