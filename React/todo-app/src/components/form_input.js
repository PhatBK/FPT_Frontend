import React, { Component } from 'react';

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  handleAddTodo = (event) => {

    if (event.key === 'Enter') {
      if(this.state.text.trim().length === 0){
        this.setState({text: ''});
      }
      if(this.state.text !== null && this.state.text !== "" && this.state.text.trim().length > 0){
        this.props.addTodo(this.state.text.trim());
        this.setState({text: ''});
      }
    }
  }

  render(){
    return(
      <header id="demo-header">
            <h1>Todo-App</h1>
            <input type="text" id="demo-input" placeholder="What needs to be done?"
            onChange={event => this.setState({text: event.target.value})}
            value={this.state.text}
            onKeyPress={event => this.handleAddTodo(event)}
            />
      </header>
    );
  }
}

export {FormInput};