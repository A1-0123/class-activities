import React from "react"
import "./Counter.scss"
// useState
import { useState, useEffect, useRef } from "react"; //functions component hooks

function Counter(){

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("Hello");

    // const [loading, setLoading] = useState(true);
    const [prompt, setPrompt] = useState("");

    // useRef
    const inputRef = useRef(null);

    useEffect(() => {
        // console.log(inputRef);
        inputRef.current.focus();
    }, [])

    useEffect(() => {
        console.log("Counter is changed!");
        if(count == 100){
            console.log("You reached to 100");
        }
    }, [count]);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 3000);

    //     return () => clearTimeout(timer);
    // }, [])

    useEffect(() => {
        console.log("Hello developers!");
    }, [])

    useEffect(() => {
        if(prompt.length >= 3) {
            fetchSearch(prompt);
        }
    }, [prompt])

    const fetchSearch = (data) => {
        console.log(data + " is searching");
    }

    const incrementFunction = (amount) => {
        setCount(prev => prev + amount);
        // count = count + 1;
    }

    const decrementFunction = (amount) => {
        // setCount(prev => {
        //     if(prev <= 0) return prev;
        //     else return prev - amount;
        // });

        // if(count !== 0) {
        //     setCount(count - 1)
        // }
    }

    const resetCounter = () => {
        setCount(0)
        setTitle("Hello 1")
    }

    return(
        <div>
            {
                // loading ? <div className="loader"></div> : 
                <div className="counter">
                    <h1 style={{color: "white"}}>{title}</h1>
                    <h1 style={{color: "white"}}>{count}</h1>
                    <button onClick={() => incrementFunction(50)}>Increment</button>
                    <button onClick={() => decrementFunction(10)}>Decrement</button>
                    <button onClick={resetCounter}>Reset</button>
                    <button onClick={() => inputRef.current.focus()}>Focus to Input</button>
                    <input ref={inputRef} type="text" onChange={(e) => setPrompt(e.target.value)} value={prompt} />
                </div>
            }
        </div>
    )
}

export default Counter;

// function sayHello() {
//     return "Hello"
// }
// sayHello()