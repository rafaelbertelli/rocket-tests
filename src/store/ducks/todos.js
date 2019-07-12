/** TYPES */
const Types = {
  ADD: "todo/ADD"
};

/** REDUCERS */
const INITIAL_STATE = {
  data: []
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.Add:
      return {
        data: [...state.todos, action.payload.todo]
      };

    default:
      return state;
  }
}

/** ACTIONS */
export const Creators = {
  addTodo: todo => ({
    type: Types.ADD,
    payload: { todo }
  })
};
