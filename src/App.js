import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const data = [
  {
  //   task: 'Watch Lambda TK Videos',
  //   id: 1,
  //   completed: false
  // },
  // {
  //   task: 'Create Todo App',
  //   id: 2,
  //   completed: false
  }
];

class App extends Component {
  constructor () {
    super ();
    this.state = {
      name: 'Leighton',
      data: data
    };
  };

  addTask = taskContent => {
    const newTask = {
      task: taskContent,
      id: Date.now(),
      completed: false
    }
    this.setState({
      data: [...this.state.data, newTask]
    })
  };

  clearCompleted = () => {
    console.log('clear list')
    this.setState({
      data: this.state.data.filter(task => !task.completed)
    })
  };

 toggleTask = id => {
   console.log('task is toggled')
   this.setState({
     data: this.state.data.map(task => {
       if (task.id === id) {
         return{
           task: task.task,
           id: task.id,
           completed: !task.completed
         };
       } else {
         return task
       }
     })
   })
 };

  render() {
    return (
      <div className='app-div'> 
        <h2>{this.state.name}'s Todo List</h2>
        <div className='input-form'>
          <TodoForm  addTask={this.addTask} />
        </div>
        <div className ='main-list'>
          <TodoList data={this.state.data} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted} />
        </div>
      </div>
    );
  }
}

export default App;


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state