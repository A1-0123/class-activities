import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../actions/todoActions";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.length !== 0) {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="todo"
        id="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
