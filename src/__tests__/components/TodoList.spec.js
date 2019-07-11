import React from "react";
import { mount } from "enzyme";
import TodoList from "../../TodoList";

it("should render a list, a button, a input text", () => {
  const wrapper = mount(<TodoList />);

  expect(wrapper.find("ul").exists()).toBe(true);
  expect(wrapper.find("button").exists()).toBe(true);
  expect(wrapper.find("input[name='todo']").exists()).toBe(true);
});

it("should be able to add new todo", () => {
  const wrapper = mount(<TodoList />);

  wrapper
    .find('input[name="todo"]')
    .simulate("change", { target: { value: "Novo Valor" } });

  wrapper.find("button").simulate("click");

  expect(wrapper.find("ul").contains(<li>Novo Valor</li>)).toBe(true);
});

it("should add new todos to localstorage", () => {
  const setItemMock = jest.fn();
  const getItemMock = jest.fn().mockReturnValue("[]");

  global.localStorage.__proto__.getItem = getItemMock;
  global.localStorage.__proto__.setItem = setItemMock;

  const wrapper = mount(<TodoList />);

  wrapper.setState({ newTodo: "Novo Todo" });
  wrapper.instance().handleAddTodo();

  expect(localStorage.setItem).toHaveBeenCalledWith(
    "todos",
    JSON.stringify(["Novo Todo"])
  );
});

it("should load todos in componentDidMount", () => {
  const getItemMock = jest
    .fn()
    .mockReturnValue(JSON.stringify(["Fazer café!"]));

  global.localStorage.__proto__.getItem = getItemMock;

  const wrapper = mount(<TodoList />);

  expect(wrapper.state("todos")).toEqual(["Fazer café!"]);
});
