import React, { Component } from 'react';
import './App.css';

// components
import {FormInput} from './components/form_input';
import {MainSectionList} from './components/main_section_lists';
import {MainSectionFooterFilters} from './components/main_section_footer_filters';
// import {Footer} from './components/footer';

class App extends Component {

  constructor() {
    super();
    this.state = {
       todos : 
       [

       ],
       backups :
       [

       ],
       count : 0,
       checkedall : false,
       completedAll : false,
       activedAll : false,
    };
  }
  resetAll = (boolean) => {
    if(boolean){
      this.setState({count : 0});
      this.setState({checkedall : false});
      this.setState({completedAll : false});
      this.setState({activedAll : false});
    } 
  }
 
  addTodo = (text) => {
    const newTodo = {
      id: this.state.todos.reduce((newId, todo) => Math.max(newId, todo.id), -1) + 1,
      name: text,
      completed: false
    }
    const todos = [...this.state.todos, newTodo];
    this.setState({todos: todos});
    this.setState({count : this.state.todos.length + 1});
  }
  //  Xoá phần tử bất kỳ
  deleteTodo = (id) => {
   
    let tmp = this.state.todos[id];
    // Mảng mới đã loại bỏ phần tử cần xóa
    if(tmp){
      let result = this.state.todos.filter(arr => arr !== tmp);
      this.setState({todos: result});
      this.setState({count : this.state.todos.length - 1});
    }else{
      alert("Need check on the checkbox..");
    }
  }
  clearnAll = (boolean) => {
    if(boolean){
      let back = [...this.state.todos];
      this.setState({backups : back});
      let result = this.state.todos.filter(arr => arr === "*");
      this.setState({todos: result});
      this.setState({count : result.length});
    }else{
      alert("You Must Completed or Checkall...");
    }
  }
  backupAll = (boolean) => {
    if(boolean){
      let back = [...this.state.backups];
      this.setState({todos : back});
      this.setState({count : this.state.backups.length});
    }
  }

  checkCount = (count,boolean) => {
    if(boolean){
      this.setState({count : this.state.count - count - 1});
    }else{
      this.setState({count : this.state.count + count});
    }
  }
  checkedAll = (boolean) => {
    this.setState({checkedall : !boolean});
  }
  completedTodos = () => {
    this.setState({completedAll: true});
    this.setState({activedAll : false});
  }
  activedTodos = () => {
    this.setState({activedAll : true});
    this.setState({completedAll: false});
  }
 
  editTodo = (id,text) => {

  }
  allTodos = () => {

  }
  

  render() {
    return (
      <div>
        <section id="demo-app">
          <FormInput addTodo={this.addTodo} />
          <section id="demo-main">
            <MainSectionList
              deleteTodo = {this.deleteTodo}
              data = {this.state.todos}
              completedall = {this.state.completedAll}
              checkedall = {this.checkedAll}
              activeall = {this.state.activedAll}
              checkCount = {this.checkCount}
            />
            <MainSectionFooterFilters 
              completedTodos = {this.completedTodos}
              activedTodos = {this.activedTodos}
              allTodos = {this.allTodos}
              editTodo = {this.editTodo}
              clearnall = {this.clearnAll}
              backupall = {this.backupAll}
              resetall = {this.resetAll}

              count = {this.state.count}
              checkedall = {this.state.checkedall}


            />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
