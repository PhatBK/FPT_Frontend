import React, { Component } from 'react';

class MainSectionList extends Component {
  render(){
    return(
        <div>
            <input id="demo-toggle-all" type="checkbox" />
            <ul id="demo-lists">
                <li>
                    <div className="demo-view">
                        <input type="checkbox" className="demo-toggle" />
                        <label for="">Python</label>
                        <button className="demo-destroy"></button>
                    </div>
                </li>
                <li>
                    <div className="demo-view">
                        <input type="checkbox" className="demo-toggle" checked/>
                        <label for="" className="demo-Delete">PHP</label>
                        <button className="demo-destroy"></button>
                    </div>
                </li>
                <li>
                    <div className="demo-view">
                        <input type="checkbox" className="demo-toggle" />
                        <label for="">Java</label>
                        <button className="demo-destroy"></button>
                    </div>
                </li>
                <li>
                    <div className="demo-view">
                        <input type="checkbox" className="demo-toggle" />
                        <label for="">JavaScript</label>
                         <button className="demo-destroy"></button>
                    </div>
                </li>
            </ul> 
        </div>
    );
  }
}

export {MainSectionList} ;