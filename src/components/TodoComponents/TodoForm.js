import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }
    };

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    taskSubmit = event => {
        event.preventDefault()
        this.props.addTask(this.state.task)
        this.setState({
            task: ''
        })
    };

    render() {
        return (
            <form onSubmit={this.taskSubmit}>
                <input 
                    type='text'
                    value={this.state.task}
                    name='task'
                    onChange={this.handleChanges}
                    placeholder='Enter New Task'
                />
                <span>
                    <button>Submit</button>
                </span>
            </form>
        )
    }
}
export default TodoForm;