import React, { Component } from 'react';

class MainSectionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check_id : '*',
            check_ed : false,
            check_all : false,
            lable_delete : false,
            count_checked : 0,
            count_uncheck : 0,
            check_lable : [

            ],
        };
        this.showAll        =  this.showAll.bind(this);
        this.showElement    =  this.showElement.bind(this);
        this.showLable      =  this.showLable.bind(this);
        this.showCheckbox   =  this.showCheckbox.bind(this);
    }
    resetAll = () => {

    }
    // Xóa một phần tử
    handleDeleteTodo = (id) => {
        if(this.state.check_id === '*'){
            this.props.deleteTodo(id);
        }else{
            this.props.deleteTodo(this.state.check_id);
            this.setState({check_id : '*'});
        }
    }
    // chọn một phần tử
    handleChecked = (event) => {
        if(event.target.checked){
            this.setState({check_id : event.target.id});
            this.setState({lable_delete : true})
            this.setState({check_ed : true});
            this.setState({count_checked : this.state.count_checked + 1});
            this.props.checkCount(this.state.count_checked,true);
            console.log(this.state.count_checked);
        }else{
            this.setState({check_id : '*'});
            this.setState({lable_delete : false});
            this.setState({check_ed : false});
            this.setState({count_uncheck : this.state.count_uncheck + 1});
            this.props.checkCount(this.state.count_uncheck,false);
            console.log(this.state.count_uncheck);
        }
    }
    // chọn tất cả các phần tử
    handleCheckall = (event) => {
        if(event.target.checked){
            console.log("Checkall ...");
            this.setState({check_all : true});
            this.setState({check_ed : true});
            this.setState({lable_delete : true});
        }else{
            console.log("Uncheckall ...");
            this.setState({check_all : false});
            this.setState({check_ed : false});
            this.setState({lable_delete : false});
        }
        this.props.checkedall(this.state.check_all);
    }
    // xóa tất cá các phần tử
    handleDeleteAll = () => {

    }

    showCheckbox = (index) => {
        if(this.state.check_all || this.props.completedall){
            return (
                <div>
                <input
                    type="checkbox" 
                    className="demo-toggle"
                    id = {index}
                    onChange = {event => this.handleChecked(event)}
                    checked
                />
                </div>
            );
        }
        if(!this.state.check_all || this.props.activeall){
            return (
                <div>
                <input
                    type="checkbox" 
                    className="demo-toggle"
                    id = {index}
                    onChange = {event => this.handleChecked(event)}
                />
                </div>
            );
        }
    }
    showLable = (lable, index) => {
        return (
            <label className = " " id =  {index} >{lable}</label>
        );
    }
    showElement = (item, index) => {
       
        return (
            <li key={item.id}>
                <div className="demo-view">
                    {this.showCheckbox(index)}
                    {this.showLable(item.name, index)}
                    <button className="demo-destroy" onClick = {event => this.handleDeleteTodo(item.id)}></button>
                </div>
            </li>
        );
    }


    showAll = () => {
            return (
                <div>
                    <input 
                        id="demo-toggle-all" 
                        type="checkbox"
                        onChange={event => this.handleCheckall(event)}
                    />
                    <ul id="demo-lists" >
                        {
                            this.props.data.map( (item,index) => this.showElement(item, index))
                        }
                    </ul> 
                </div>
            );
    }
    
    render(){
        return(
            this.showAll()
        );
    }
}

export {MainSectionList} ;