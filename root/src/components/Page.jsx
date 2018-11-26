import React ,{Component} from 'react'
import './Page.css'

class Page extends Component {

    render() {

        let render;

        let desc;

        if (this.props.spell.desc) {
             desc = this.props.spell.desc.map((item, i) => {
                return (
                    <div className="spell-text" key={i}>
                        {item}
                    </div>
                )
            })
        }

        if (this.props.page) {
            render = this.props.spell.school ? (
            <div className="page-inside">
                <span>
                    <div className='spell-header'>Name:</div>
                    <div className="spell-text">{this.props.spell.name}</div>
                    <br />
                </span>

                <span>
                    <div className="spell-header">Level:</div>
                    <div className="spell-text">{this.props.spell.level}</div>
                    <br/>
                </span>

                <span>
                    <div className="spell-header">School:</div>
                    <div className="spell-text">{this.props.spell.school.name}</div>
                    <br/>
                </span>

                <span>
                    <div className="spell-header">Duration:</div>
                    <div className="spell-text">{this.props.spell.duration}</div>
                    <br/>
                </span>

                <span>
                    <div className="spell-header">Range:</div>
                    <div className="spell-text">{this.props.spell.range}</div>
                    <br/>
                </span>

                <span>
                    <div className="spell-header">Casting Time:</div>
                    <div className="spell-text">{this.props.spell.casting_time}</div>
                    <br/>
                </span>

                <span>
                    <div className="spell-header">Desc:</div>
                    {desc}
                    <div className="spell-text">{`${this.props.spell.higher_level ? this.props.spell.higher_level : ""}`}</div>
                    <br/>
                </span>

                <span>
                    <div className="spell-header">Components:</div>
                    <div className="spell-text">{this.props.spell.components}</div>
                    <br/>
                </span>

                <span>
                    <div className="spell-header">Material:</div>
                    <div className="spell-text">{this.props.spell.material ? this.props.spell.material : 'none'}</div>

                </span>
            </div>) 
            : (<div>Loading:</div>)
        } else {
            render = (
            <div className="spellBook-page-0 page-inside">
                <p className="spellBook-page-0-header">Spellbook</p>
                <img className="spellBook-page-0-image" src="http://www.enworld.org/forum/attachment.php?attachmentid=62507&d=1404384551&stc=1" alt="Its so cool"/>
            </div>
            )
        }
        return (
            <div>
                {render}
            </div>
        )
    }
}

export default Page;