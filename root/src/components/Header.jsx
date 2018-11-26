import React from 'react';
import './Header.css';


function Header(props) {
    return (
    <div className='Header'>

        <img className="Header-end1"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Draig.svg" alt=""/>

        <div className="Header-title-container">
            <h1 className="Header-title">Dungeons 
                <img className="Header-title-img"
                src="https://openclipart.org/download/274079/dragon_ampersand.svg" alt="Its a Dragon!"/> 
                Dragons
            </h1>
            <h3 className="Header-text">encounter generator</h3>
        </div>

        <img className="Header-end2"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Draig.svg" alt=""/>

    </div>
    )
}

export default Header;