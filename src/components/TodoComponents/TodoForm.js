import React, { Component } from 'react'
import styled from 'styled-components';

const TodoInput = styled.input`
width: 100%;
font-size: 14px;
padding: 6px 8px;
border-width: 1px;
border-style: solid;
`;


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
                <TodoInput 
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