import React, {Component} from "react";

class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="Input">
        <form className="flex-fullWidth" onSubmit={e => this.onSubmit(e)}>
          <input
            autoFocus
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Upiši poruku"
          />
          <button>Pošalji</button>
        </form>
      </div>
    );
  }
}

export default Input;
