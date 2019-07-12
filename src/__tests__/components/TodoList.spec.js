import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";

import TodoList from "../../TodoList";
import { Creators as TodosActions } from "../../store/ducks/todos";

const mockStore = createStore();
const INITIAL_STATE = { todos: { data: ["Fazer café", "Trabalhar"] } };
const store = mockStore(INITIAL_STATE);

it("should render the list", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  console.log(wrapper.html());
  expect(wrapper.find("li").length).toBe(2);
});

it("should be able to add new todos", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  wrapper
    .find("TodoList")
    .setState({ newTodo: "Comprar uma motinho para ir trabalhar" });
  wrapper.find("button").simulate("click");

  // AQUI O GETSTATE NAO VAI TRAZER O STATE NESTE MOMENTO, ELE VAI TRAZER O INITIAL STATE
  // expect(store.getState().todos.data).toEqual([
  //   "Fazer café",
  //   "Trabalhar",
  //   "Comprar uma motinho para ir trabalhar"
  // ]);
  expect(store.getActions()).toContainEqual(
    TodosActions.addTodo("Comprar uma motinho para ir trabalhar")
  );
});

// it("should render a list, a button, a input text", () => {
//   const wrapper = mount(<Provider store={}><TodoList /></Provider>);

//   expect(wrapper.find("ul").exists()).toBe(true);
//   expect(wrapper.find("button").exists()).toBe(true);
//   expect(wrapper.find("input[name='todo']").exists()).toBe(true);
// });

// it("should be able to add new todo", () => {
//   const wrapper = mount(<Provider store={}><TodoList /></Provider>);

//   wrapper
//     .find('input[name="todo"]')
//     .simulate("change", { target: { value: "Novo Valor" } });

//   wrapper.find("button").simulate("click");

//   expect(wrapper.find("ul").contains(<li>Novo Valor</li>)).toBe(true);
// });

// it("should add new todos to localstorage", () => {
//   const setItemMock = jest.fn();
//   const getItemMock = jest.fn().mockReturnValue("[]");

//   global.localStorage.__proto__.getItem = getItemMock;
//   global.localStorage.__proto__.setItem = setItemMock;

//   const wrapper = mount(<Provider store={}><TodoList /></Provider>);

//   wrapper.setState({ newTodo: "Novo Todo" });
//   wrapper.instance().handleAddTodo();

//   expect(localStorage.setItem).toHaveBeenCalledWith(
//     "todos",
//     JSON.stringify(["Novo Todo"])
//   );
// });

// it("should load todos in componentDidMount", () => {
//   const getItemMock = jest
//     .fn()
//     .mockReturnValue(JSON.stringify(["Fazer café!"]));

//   global.localStorage.__proto__.getItem = getItemMock;

//   const wrapper = mount(<Provider store={}><TodoList /></Provider>);

//   expect(wrapper.state("todos")).toEqual(["Fazer café!"]);
// });
