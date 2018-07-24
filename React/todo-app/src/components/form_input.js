import React, { Component } from 'react';

class FormInput extends Component {
  render(){
    return(
      <header id="demo-header">
            <h1>Todo-App</h1>
            <input type="text" id="demo-input" placeholder="What needs to be done?" autofocus />
      </header>
    );
  }
}

export {FormInput};