import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import styled from 'styled-components';

const AppDiv = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 2%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #5D9B84;
  max-width: 60%;
  padding: 3%;
  border-radius: 50px;
`;

const InputForm = styled.div`
  margin-right: 1%;
  padding: 2%;
`;

const MainList = styled.div`
  margin-top: 2%;
`;

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
      <AppDiv className='app-div'> 
        <h2>{this.state.name}'s Todo List</h2>
        <InputForm className='input-form'>
          <TodoForm  addTask={this.addTask} />
        </InputForm>
        <MainList className ='main-list'>
          <TodoList data={this.state.data} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted} />
        </MainList>
      </AppDiv>
    );
  }
}

export default App;


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state