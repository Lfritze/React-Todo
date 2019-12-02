import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Practice JavaScript',
          id: 1,
          completed: false
        },
        {
          task: 'Practice React',
          id: 2,
          completed: false
        }
      ],
      todo: ''
    };
  }

  addTodo = event => {
    event.preventDefault();
    const newTodo = { task: this.state.todo, 
                      completed: false, 
                      id: Date.now() };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    })
  };

  changeTodo = event => this.setState({ [event.target.name]: event.target.value })

toggleTodoComplete = id => {
  let todos = this.state.todos.slice();
  todos = todos.map(todo => {
    if (todo.id === id) {
      todo.completed =!todo.completed;
      return todo;
    } else {
      return todo;
    }
  });
  this.setState( { todos });
};

clearCompletedTodos = event => {
  event.preventDefault()
  let todos = this.state.todos.filter(todo => !todo.completed);
  this.setState({ todos })
};

  render() {
    return (
      <div className="app-div">
        <TodoList 
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm 
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
