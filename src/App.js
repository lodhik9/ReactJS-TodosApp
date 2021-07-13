import React, { Component } from 'react';
import ListTodos from './listTodos';
import AddTodo from './AddForm';

class App extends Component {
  state = { 
    todosArr: [
      {id: 1, content: "buy some milk"}
    ]
   }

   delTodo = (id) => {
   const newArr = this.state.todosArr.filter(tempEle => {
      return tempEle.id !== id;
  })
  this.setState({
    todosArr: newArr
  })
   }

   addTodo = (todo) => {
     todo.id = Math.random();
     let copyArr = [...this.state.todosArr, todo];
     this.setState({
       todosArr: copyArr
     })


   }

  render() { 
    return (
      <div className="todo-app container">
        <h1 className = "center blue-text">Todos</h1>
        <ListTodos todosArrayProp = {this.state.todosArr} delTodo = {this.delTodo} />
        <AddTodo addTodo ={this.addTodo} />
     
      </div>
    );
  }
}
 
export default App;
