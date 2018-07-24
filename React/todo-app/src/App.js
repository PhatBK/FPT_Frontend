import React, { Component } from 'react';
import './App.css';

// components
import {FormInput} from './components/form_input';
import {MainSection} from './components/main_section';
import {Footer} from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <section id="demo-app">
          <FormInput/>
          <MainSection/>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
