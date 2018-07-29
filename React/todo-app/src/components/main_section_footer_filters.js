import React, { Component } from 'react';

class MainSectionFooterFilters extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            completedAll : false,
            activeAll : false,
            clearnAll : false,

            cssClearnAll : " ",
            cssActive : " ",
            cssCompleted : " ",
            cssBackup : " ",
        };
        this.showElement = this.showElement.bind(this);
        this.resetAll = this.resetAll.bind(this);
    }
    // đặt lại mặc định cho tất cả các state
    resetAll = () => {
        this.setState({completedAll : false});
        this.setState({activeAll : false});
        this.setState({clearnAll : false});
        this.setState({cssClearnAll : " "});
        this.setState({cssActive : " "});
        this.setState({cssCompleted : " "});
        this.setState({cssBackup : " "});
    }

    handleCompleted = (event) => {

        this.setState({completedAll:true});
        this.setState({clearnAll : true})
        this.setState({activeAll : false})

        this.setState({cssCompleted : "demo-selected"});
        this.setState({cssActive : " "});
        this.setState({cssClearnAll : " "});
        this.setState({cssBackup : " "});
        
        this.props.completedTodos();
        this.props.checkCountCompleted();
        console.log("Completed was choised...");
    }
    handleActive = (event) => {

        this.setState({activeAll:true});
        this.setState({completedAll : false});
        this.setState({clearnAll : false})

        this.setState({cssActive : "demo-selected"});
        this.setState({cssCompleted : " "});
        this.setState({cssClearnAll : " "});
        this.setState({cssBackup : " "});
        
        this.props.activedTodos();
        this.props.checkCountActived();
        console.log("Active was choised...");
    }
    handleClearnAll = (event) => {
        this.setState({cssClearnAll    : "demo-selected"});
        this.setState({cssActive : " "});
        this.setState({cssCompleted : " "});
        this.setState({cssBackup : " "});
        console.log("Clearn All was choised...");
        if(this.state.completedAll || this.props.checkedall || this.state.clearnAll){
            this.props.clearnall(true);
            this.setState({completedAll : false});
            this.setState({clearnAll : false});
            this.props.resetall(true);
            this.resetAll();
        }

    }
    handleBackupAll = () => {
        this.setState({activeAll : true});
        this.setState({completedAll : false});
        this.setState({cssBackup : "demo-selected"});
        this.setState({cssClearnAll    : " "});
        this.setState({cssActive : " "});
        this.setState({cssCompleted : " "});
        this.props.backupall(true);
        console.log("Backup All was choised...");
    }
    showElement = () => {
        return (
            <footer id="demo-footer">
                        <span id="demo-count"><strong>{this.props.count} &nbsp;</strong>Items activing</span>

                        <ul id="demo-filters">
                            <li>
                                <a className={this.state.cssBackup} onClick={event => this.handleBackupAll(event)}>Backup-All</a>
                            </li>
                            <li>
                                <a className={this.state.cssActive} onClick={event => this.handleActive(event)} >Active</a>
                            </li>
                            <li>
                                <a className={this.state.cssCompleted} onClick = {event => this.handleCompleted(event)}> Completed</a>
                            </li>
                            <li>
                                <a className={this.state.cssClearnAll} onClick={event => this.handleClearnAll(event)}>Clearn-All</a>
                            </li>
                        </ul>
            </footer>
        );
    }
    render(){
        return(
            this.showElement()
        );
    }
}

export {MainSectionFooterFilters};