import React, { Component } from 'react';

class MainSectionFooterFilters extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            completedAll : false,
            activeAll : false,
            all : false,
            cssAll : " ",
            cssActive : " ",
            cssCompleted : " ",
        };
        this.showElement = this.showElement.bind(this);
    }
    handleCompleted = (event) => {
        this.setState({completedAll:true});
        this.setState({cssCompleted : "demo-selected"});
        this.setState({cssActive : " "});
        this.setState({cssAll : " "});
        this.props.completedTodos();
        console.log("Completed was choised...");
    }
    handleActive = (event) => {
        this.setState({activeAll:true});
        this.setState({cssActive : "demo-selected"});
        this.setState({cssCompleted : " "});
        this.setState({cssAll : " "});
        console.log("Active was choised...");
    }
    handleAll = (event) => {
        this.setState({activeAll:true});
        this.setState({cssAll : "demo-selected"});
        this.setState({cssActive : " "});
        this.setState({cssCompleted : " "});
        console.log("All was choised...");
    }
    showElement = () => {
        return (
            <footer id="demo-footer">
                        <span id="demo-count"><strong>{this.props.count} &nbsp;</strong>Items left</span>

                        <ul id="demo-filters">
                            <li>
                                <a className={this.state.cssAll} onClick={event => this.handleAll(event)}>All</a>
                            </li>
                            <li>
                                <a className={this.state.cssActive} onClick={event => this.handleActive(event)} >Active</a>
                            </li>
                            <li>
                                <a className={this.state.cssCompleted} onClick = {event => this.handleCompleted(event)}> Completed</a>
                            </li>
                        </ul>
            </footer>
        );
    }
    render(){
        return(
            this.showElement()
            // <footer id="demo-footer">
            //             <span id="demo-count"><strong>{this.props.count} &nbsp;</strong>Items left</span>
            //             <ul id="demo-filters">
            //                 <li>
            //                     <a className="" href="/#">All</a>
            //                 </li>
            //                 <li>
            //                     <a className="demo-selected" href="/#">Active</a>
            //                 </li>
            //                 <li>
            //                     <a className="" href="/#" onClick = {event => this.handleCompleted(event)}> Completed</a>
            //                 </li>
            //             </ul>
            // </footer> 
        );
    }
}

export {MainSectionFooterFilters};