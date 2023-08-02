import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../actions/todoActions";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

  return (
    <ul>
        {
            todos.map(element => {
                return <li key={element.id}>
                    <span onClick={() => dispatch(toggleTodo(element.id))} style={{ textDecoration: element.completed ? 'line-through' : "none" }}>{element.todo}</span>
                    <button onClick={() => dispatch(deleteTodo(element.id))}>Delete</button>
                </li>
            })
        }
    </ul>
  )
}

export default TodoList