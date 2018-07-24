import React, { Component } from 'react';

class Todoapp extends Component {
    render() {
        return (
        <section id="demo-app">
                <header id="demo-header">
                    <h1>Todo-App</h1>
                    <input type="text" id="demo-input" placeholder="What needs to be done?" autofocus/>
                </header>
                <section id="demo-main">
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
                </section>
                <footer id="demo-footer">
                    <span id="demo-count"><strong>4 &nbsp;</strong>Items left</span>

                    <ul id="demo-filters">
                        <li>
                            <a className="demo-selected" href="#">All</a>
                        </li>
                        <li>
                            <a className="demo-selected" href="#">Active</a>
                        </li>
                        <li>
                            <a className="demo-selected" href="#"> Completed</a>
                        </li>
                    </ul>
                </footer>
            </section>
        );
    }
}

export {Todoapp} ;