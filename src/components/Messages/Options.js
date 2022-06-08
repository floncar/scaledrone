import React, {Component} from "react";
import {GiHamburgerMenu} from 'react-icons/gi';

class Options extends Component {

    changeColorScheme(){
       document.body.classList.toggle("dark-mode");
    }

    toggleOptions(){
        const optionElement = document.querySelector('.options');
        optionElement.classList.toggle('show');
    }

    render(){
        return (
            <div>
                <div className="center padding-all">
                    <span className="optionToggle" onClick={this.toggleOptions}>
                        <GiHamburgerMenu />
                    </span>
                </div>
                <div className="options">
                    <div className="flex-fullWidth flex-column">
                        <b><span>PROMIJENI COLOR SHEMU</span></b><br/>
                        <button className="no-margin" onClick={this.changeColorScheme}>
                            Promijeni
                        </button>
                    </div>
                </div>                
            </div>            
        );
    };
}
export default Options;