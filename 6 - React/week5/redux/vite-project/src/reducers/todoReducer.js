const initialState = {
  todos: [], // [{ id: 1, text: "Learn React", completed: false }]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": // action.type is "ADD_TODO"
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETE_TODO": // action.type is "DELETE_TODO"
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO": // action.type is "TOGGLE_TODO"
      return {
        ...state,
        todos: state.todos.map(todo => {
            if(todo.id === action.payload) {
                return { ...todo, completed: !todo.completed }
            } else {
                return todo;
            }
        })
      }
    default:
      return state;
  }
};

export default todoReducer;
