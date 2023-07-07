import React, { useState } from 'react'
import './Card.scss'

const Card = () => {

  const [count, setCount] = useState(0);
  let [title, setTitle] = useState('Count');
  const increment = () => setCount(count + 1);

  function changeTitle(){
    // title = "Hello" // bad practice and its not right
    setTitle("Count Changed") // good practice and the way to do it
  }

  return (
    <div id='card'>
        <h1>{title}</h1>
        <h2>{count}</h2>

        <button onClick={increment}>Increment</button>
        <button onClick={changeTitle}>Change Title</button>
    </div>
  )
}

export default Card