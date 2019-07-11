import React, { Component } from "react";

export default class src extends Component {
  state = {
    newTodo: "",
    todos: []
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos");

    console.log(todos);
    if (todos) {
      this.setState({ todos: JSON.parse(todos) });
    }
  }

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    this.setState(
      {
        todos: [...this.state.todos, this.state.newTodo],
        newTodo: ""
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
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
        <button onClick={this.handleAddTodo}>Adicionar novo TODO</button>
      </div>
    );
  }
}
