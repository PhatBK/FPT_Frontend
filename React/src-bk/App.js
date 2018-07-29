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
       todos: 
       [
        {
          id : 0,
          name : "php",
          completed: false
        },
        {
          id : 1,
          name : "python",
          completed : true
        },
        {
          id : 2,
          name : "Java",
          completed : false
        },
        {
          id : 3,
          name : "Scala",
          completed : false
        },
       ],

       todosBack:
       [

       ],

       todoActives :
       [

       ],

       todoCompleteds :
       [

       ],
       completedAll : false,
       activedAll : false,
    };
 }
 // mảng để khôi phục lại dữ liệu
 
 
//  them item moi
  addTodo = (text) => {
    const newTodo = {
      id: this.state.todos.reduce((newId, todo) => Math.max(newId, todo.id), -1) + 1,
      name: text,
      completed: false
    }
    const todos = [...this.state.todos, newTodo];
    this.setState({todos: todos});
    const todosB = [...this.state.todos];
    this.setState({todosBack : todosB});
  }
  //  Xoá phần tử bất kỳ
  deleteTodo = (id) => {
   
    let tmp = this.state.todos[id];
    // Mảng mới đã loại bỏ phần tử cần xóa
    if(tmp){
      let result = this.state.todos.filter(arr => arr !== tmp);
      this.setState({todos: result});
    }else{
      alert("Need check on the checkbox..");
    }
  }
  completedTodos = () => {
    this.setState({completedAll: true});
  }
  activedTodos = () => {

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
            />
            <MainSectionFooterFilters 
              completedTodos = {this.completedTodos}
              activedTodos = {this.activedTodos}
              allTodos = {this.allTodos}
              editTodo = {this.editTodo}
              count = {this.state.todos.length}
            />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
