import React, { Component } from "react";

export default class src extends Component {
  state = {
    newTodo: "",
    todos: []
  };

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ""
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="todo"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={`${todo}+${index}`}>{todo}</li>
          ))}
        </ul>
        <button onClick={this.addTodo}>Adicionar novo TODO</button>
      </div>
    );
  }
}
