import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodosActions } from "./store/ducks/todos";

class TodoList extends Component {
  state = {
    newTodo: ""
    // todos: []
  };

  // componentDidMount() {
  //   const todos = localStorage.getItem("todos");

  //   console.log(todos);
  //   if (todos) {
  //     this.setState({ todos: JSON.parse(todos) });
  //   }
  // }

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    //   this.setState(
    //     {
    //       todos: [...this.state.todos, this.state.newTodo],
    //       newTodo: ""
    //     },
    //     () => {
    //       localStorage.setItem("todos", JSON.stringify(this.state.todos));
    //     }
    //   );

    this.props.addTodo(this.state.newTodo);
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
          {/* {this.state.todos.map((todo, index) => ( */}
          {this.props.todos.map((todo, index) => (
            <li key={`${todo}+${index}`}>{todo}</li>
          ))}
        </ul>
        <button onClick={this.handleAddTodo}>Adicionar novo TODO</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
