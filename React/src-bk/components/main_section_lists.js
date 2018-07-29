import React, { Component } from 'react';

class MainSectionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check_id : '*',
            check_all : false,
            lable_delete : false,
            count_check : 1,

        };
        this.showElement = this.showElement.bind(this);
        this.showInput = this.showInput.bind(this);
        
    }
    handleDeleteTodo = (id) => {
        // console.log(id);
        if(this.state.check_id === '*'){
            this.props.deleteTodo(id);
        }else{
            this.props.deleteTodo(this.state.check_id);
            this.setState({check_id : '*'});
        }
        
    }
    handleChecked = (event) => {
        
        if(event.target.checked){
            this.setState({check_id : event.target.id});
            this.setState({lable_delete : true})
            this.setState({count_check : this.state.count_check + 1});
        }else{
            this.setState({check_id : '*'});
            this.setState({lable_delete : false});
            this.setState({count_check : this.state.count_check - 1});
        }
    }
    handleCheckall = (event) => {
        if(event.target.checked){
            console.log("Checkall ...");
            this.setState({check_all : true});
            this.setState({lable_delete : "demo-Delete"});
        }else{
            console.log("Uncheckall ...");
            this.setState({lable_delete : " "});
            this.setState({check_all : false});
        }
    }
    showInput = (item, index) => {
        if(this.state.lable_delete){
            return (
                <li key={item.id}>
                    <div className="demo-view">
                        <input
                            type="checkbox" 
                            className="demo-toggle"
                            id = {index}
                            onChange = {event => this.handleChecked(event)}
                        />        
                        <label className = "demo-Delete" >{item.name}</label>
                        <button className="demo-destroy" onClick = {event => this.handleDeleteTodo(item.id)}></button>
                    </div>
                </li>
            );
        }else{
            return (
                <li key={item.id}>
                    <div className="demo-view">
                        <input
                            type="checkbox" 
                            className="demo-toggle"
                            id = {index}
                            onChange = {event => this.handleChecked(event)}
                        />        
                        <label className = " " >{item.name}</label>
                        <button className="demo-destroy" onClick = {event => this.handleDeleteTodo(item.id)}></button>
                    </div>
                </li>
            );
        }
    }
    showElement = () => {
        if(this.state.check_all){
            return (
                <div>
                <input 
                    id="demo-toggle-all" 
                    type="checkbox"
                    onChange={event => this.handleCheckall(event)}
                />
                <ul id="demo-lists" >
                {this.props.data.map( (item,index) => 
                    this.showInput(item, index)
                    // <li key={item.id}>
                    //     <div className="demo-view">
                    //         <input
                    //             type="checkbox" 
                    //             className="demo-toggle"
                    //             id = {index}
                    //             onChange = {event => this.handleChecked(event)}
                    //         />        
                    //         <label className = {this.state.lable_delete} >{item.name}</label>
                    //         <button className="demo-destroy" onClick = {event => this.handleDeleteTodo(item.id)}></button>
                    //     </div>
                    // </li>
                    )
                }
                </ul> 
                </div>
            );
        }else{
            return (
            <div>
                <input 
                    id="demo-toggle-all" 
                    type="checkbox"
                    onChange={event => this.handleCheckall(event)}
                />
                <ul id="demo-lists" >
                {this.props.data.map( (item,index) => 
                    this.showInput(item, index)
                    // <li key={item.id}>
                    //     <div className="demo-view">
                    //         <input
                    //             type="checkbox" 
                    //             className="demo-toggle"
                    //             id = {index}
                    //             onChange = {event => this.handleChecked(event)}
                    //         />
                    //         <label className = {this.state.lable_delete} >{item.name}</label>
                    //         <button className="demo-destroy" onClick = {event => this.handleDeleteTodo(item.id)}></button>
                    //     </div>
                    // </li>
                    )
                }
                </ul> 
            </div>
            );
        }
    }
    
    render(){
        return(
            this.showElement()
        );
    }
}

export {MainSectionList} ;