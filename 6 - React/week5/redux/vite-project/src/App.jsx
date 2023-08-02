import './App.css'
import { useDispatch } from 'react-redux';
// import DisplayCounter from './components/DisplayCounter';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
function App() {

  const dispatch = useDispatch();

  return (
    <>
      <h1>Todo List</h1> 
      <TodoForm />
      <TodoList />   
      {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment +</button>
      <DisplayCounter />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement -</button>

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "INCREMENT_BY_AMOUNT", payload: 10 })}>Increment by 10</button> */}
    </>
  )
}

export default App
