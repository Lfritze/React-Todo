// NOTES **************

// <Todo /> is a component that takes in the todo data and displays the task to the screen.

import React, { Component } from 'react'
import './Todo.css';


class Todo extends Component {
  
    render() {
        return (
            <div onClick={() => this.props.toggleTask(this.props.id)}
            className={`${this.props.completed ? 'completed' : 'task'}`}>
                {this.props.task}
            </div>
        )
    }
}

export default Todo;

// MORE NOTES ********

//true is completed else task is false