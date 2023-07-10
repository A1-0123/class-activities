import "./Card.css"
import { useState } from "react";

// const Card = (props) => {
    const Card = ({ id, title, description, image, social, incButton, decButton }) => {
    // let { acc1, acc2 } = social.twitter;
    // title = "asdkakdk" // wrong!
    // props are readonly, you shouldn't change/reassign
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            {id}
            <img src={image} alt="" />
            <div className="card-inner">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{count}</p>
                <div className="card-action">
                    <button onClick={() => incButton()} className="card-cancel">Increase</button>
                    <button onClick={() => decButton()} className="card-approve">Decrease</button>
                </div>
            </div>
        </div>
    );
}

export default Card;


// 

// function sum (a, b) {
//     return a + b;
// }

// console.log(sum(1, 2)); // 3
// console.log(sum(5, 7)); // 12

// destructure object

// let c = {
//     title: "title 1",
//     description: "bla bla",
//     image: "image 1"
// }

// const { title, description, image} = c;

// console.log(title);
// console.log(description);