import React, { Component } from 'react';

class MainSectionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check_id : '*',
            check_ed : false,
            check_all : false,
            lable_delete : " ",
            count_checked : 0,
            count_uncheck : 0,
            check_lable : [],
            change_lable : " ",
        };
        this.showAll        =  this.showAll.bind(this);
        this.showElement    =  this.showElement.bind(this);
        this.showLable      =  this.showLable.bind(this);
        this.showCheckbox   =  this.showCheckbox.bind(this);
    }
    resetAll = () => {
        this.setState({check_id : '*'});
        this.setState({check_ed : false});
        this.setState({check_all : false});
        this.setState({lable_delete : " "});
        this.setState({count_checked : 0});
        this.setState({count_uncheck : 0});
        this.setState({check_lable : []}); 
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
            this.setState({lable_delete : " "})
            this.setState({check_ed : true});
            this.setState({count_checked : this.state.count_checked + 1});
            this.setState({count_uncheck : 0});
            this.props.checkCount(1,true);
            let labels = document.getElementsByTagName('label');
            labels[event.target.id].setAttribute('class','demo-Delete');
        }else{
            this.setState({check_id : '*'});
            this.setState({lable_delete : " "});
            this.setState({check_ed : false});
            this.setState({count_uncheck : this.state.count_uncheck + 1});
            this.props.checkCount(1,false);
            this.setState({count_checked : 0});
            let labels = document.getElementsByTagName('label');
            labels[event.target.id].setAttribute('class',' ');
        }
    }
    // chọn tất cả các phần tử
    handleCheckall = (event) => {
        if(event.target.checked){
            console.log("Checkall ...");
            this.setState({check_all : true});
            this.setState({check_ed : true});
            this.setState({lable_delete : "demo-Delete"});
            this.props.checkCountAll();
        }else{
            console.log("Uncheckall ...");
            this.setState({check_all : false});
            this.setState({check_ed : false});
            this.setState({lable_delete : " "});
            this.props.checkCountAll();
        }
        this.props.checkedall(this.state.check_all);
        console.log(this.state.check_all);
    }

    handleChangeText = (event) => {
        this.setState({change_lable : "change"});
        if((this.state.check_ed && this.state.check_id === event.target.id) 
            || this.props.completedall 
            || this.state.check_all
        ){
            alert("You can't change element checked...");
        }else{
            this.props.editTodo(event.target.id,event.target.textContent);
        }
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
        if(this.props.completedall){
            return (
                <label 
                    onDoubleClick = {event => this.handleChangeText(event)} 
                    className = "demo-Delete"
                    id = {index}
                >
                {lable}
                </label>
            );
        }else if(this.props.activeall){
            return (
                <label 
                    onDoubleClick = {event => this.handleChangeText(event)} 
                    className = " "
                    id = {index}
                >
                {lable}
                </label>
            );
        }else{
            return (
                <label 
                    onDoubleClick = {event => this.handleChangeText(event)} 
                    className = {this.state.lable_delete}
                    id = {index}
                >
                {lable}
                </label>
            );
        }
    }

    showElement = (item, index) => {
        return (
            <li key={item.id} className = " ">
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