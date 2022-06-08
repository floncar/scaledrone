import React, { Component } from 'react';
import App from '../App/App';
import '../App/App.css';
import randomName from '../Setup/RandomName';
import Setup from '../Setup/Setup';

class Intro extends Component {

    constructor() {
        super();

    this.state = {
        name: ''
    }
    }

    createRandomUsername = () => {
        const nameRandom = randomName();
        this.setState({ name: nameRandom });
    }

    createCustomUsername = () => {
        const novoIme = document.querySelector("#poljeIme").value;
        this.setState({ name: novoIme });
    }

    render(){

        const username = this.state.name;

        return (
            <div>
                <div className="App">
                    <div className="App-header">
                        <h1>React - seminarski rad</h1>
                    </div>
                    { !username && <Setup            
                createRandomUsername={this.createRandomUsername}
                createCustomUsername={this.createCustomUsername}            
            />}

            { username && <App            
                username = {username}            
            />}
                </div>
            </div>
            
            );
    }
}

export default Intro;