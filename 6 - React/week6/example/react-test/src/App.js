import { useState } from "react"
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
  }

  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  }
  return (
    <div className="App">
      <button data-testid="button-increment" onClick={handleIncrement}>Increment</button>
      <h1>Count: {counter}</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
