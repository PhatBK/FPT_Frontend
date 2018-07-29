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
      // gửi dữ liệu từ form ngươc lên cho App ==> thêm vào mảng Item
      this.props.addTodo(this.state.text);
      // đặt lại ô input bằng ""
      this.setState({text: ''});
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