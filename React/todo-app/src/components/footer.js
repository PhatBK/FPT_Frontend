import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <footer className="footer-main">
        <p id="demo-info">Test React App </p>
        <p id="demo-author"><span>Developer&nbsp;</span>Nguyễn Huy Phát</p>
        <p id="demo-author-link"><a href="https://github.com/PhatBK" target="_blank">Github</a></p>
      </footer>
    );
  }
}
export {Footer};