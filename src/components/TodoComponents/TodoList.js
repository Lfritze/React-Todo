// NOTES ****************

//Your todo list should display a list of todos, an input field, a submit button, and a clear all button.

//<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

// NOTES END ****************

import React, { Component } from 'react'
import Todo from './Todo'


class TodoList extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                {this.props.data.map(task => (
                    <Todo
                        key={task.id} 
                        id={task.id}
                        task={task.task}
                        completed={task.completed}
                        toggleTask={this.props.toggleTask}
                    />
                ))}; 
                <button onClick={this.props.clearCompleted}>Delete Completed Tasks</button>
        </div> //className = 'todo-list'
        ) // return
    } //render
}; // class TodoList extends Component

export default TodoList;

