import { Component } from "react";

export default class Counter extends Component {

    state = {
        count: 0,
    }

    componentDidMount() {
        // console.log("Hello this component mounted!");
    }

    // useEffect(() => { // componentDidMount, it calls once when component on the screen.
    // }, [])

    componentDidUpdate(prevProps, prevState) {
        // console.log("Component did updated!");
        // console.log(prevState);
        // console.log(prevProps);
    }

    componentWillUnmount(){
        console.log("Component will unmounted!");
    }

    // useEffect(() => {
    //     return () => { // looks like componentWillUnmount
    //         // logic to clean
    //     }
    // }, [])

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return <>
            <p>{this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </>
    }

}