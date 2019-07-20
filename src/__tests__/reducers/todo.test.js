import todosReducers, {
  Creators as TodosActions
} from "../../store/ducks/todos";

describe("Todos Reducer", () => {
  it("should be able to add todos", () => {
    const state = todosReducers(
      { data: [] },
      TodosActions.addTodo("Novo Todo")
    );

    expect(state.data[0]).toBe("Novo Todo");
  });

  it("should be able to complete todo", () => {
    const todos = ["Fazer café"];

    const state = todosReducers(
      { data: todos },
      TodosActions.completeTodo("Fazer café")
    );

    expect(state.data.length).toBe(0);
  });
});
