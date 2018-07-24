import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Logo} from './components/logoReact';
import {Info} from './components/info';
// import {Footer} from './components/footer';
import {Todoapp} from './components/todoapp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todoapp/>
        <Footer/>
      </div>
    );
  }
}
class Footer extends Component {
  render(){
    return(
      <footer className="footer-main">
        <img src="" alt="" />
        <p id="demo-info">Test ReactJS App </p>
        <p id="demo-author">Nguyễn Huy Phát</p>
        <p id="demo-author-link"><a href="https://github.com/PhatBK" target="_blank">Github</a></p>
      </footer>
    );
  }
}

export default App;
