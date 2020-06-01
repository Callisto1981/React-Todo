import React from "react";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: "",
      id: Date.now(),
      did: false
    };
  }

  addTodo = newItem => {
    const newTodo = {
      todo: newItem
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  toggleItem = () => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            did: !item.did
          };
        } else {
          return item;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
