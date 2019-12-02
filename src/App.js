import React from 'react';

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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
