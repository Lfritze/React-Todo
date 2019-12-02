import React from 'react'

const TodoForm = (props) => {
    return(
        <form>
            <input 
                onChange={props.handleTodoChange}
            />
        </form>
    )
}