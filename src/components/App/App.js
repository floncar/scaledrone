import React, { Component } from 'react';
import './App.css';
import Messages from "../Messages/Messages";
import Input from "../Messages/Input";
import Options from '../Messages/Options';

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class App extends Component {
  state = {
    messages: [],
    member: {
      username: this.props.username,
      color: randomColor(),
    }
  }

  constructor(props) {
    super(props);
    this.drone = new window.Scaledrone("F5ptILEfFoUW2X8y", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
  }

  render() {
    return (
      <div className="App">
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
          username={this.state.member.username}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
        <Options/>
      </div>      
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }
}

export default App;