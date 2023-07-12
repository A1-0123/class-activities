import React from "react";
import Nav from "./components/Nav/Nav";
import Button from "./components/Button/Button";
import styled from "styled-components";

const CustomButton1 = styled.button`
    color: red;
    background-color: blue;
    border: none;
    border-radius: 6px;
    padding: 0.2rem 0.5rem;
    width: 100px;
    font-size: 1rem;
    text-decoration: none;
    font-family: "Fira Code", monospace;
`;

const SmallCustomButton = styled(CustomButton1)`
    width: 80px;
    color: orange;
    background-color: gray;
`

const LargeCustomButton = styled(CustomButton1)`
    width: 200px;
    color: green;
    background-color: yellow;
`

const CustomButton2 = styled.button`
  color: ${props => props.textColor || "blue"};
  background-color: ${props => props.bgColor || "red"};
  border: none;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  font-size: ${props => props.fontSize || "1rem"}
`;

const UpperCaseButton = (props) => 
  <CustomButton1 {...props} children={props.children.toUpperCase()}></CustomButton1>

function App() {

  return <div>
    {/* <Button orange />
    <Button dark /> */}
    <CustomButton1 as={UpperCaseButton}>Hello</CustomButton1>
    <SmallCustomButton >Hello</SmallCustomButton>
    <LargeCustomButton as={"a"} href="https://www.google.com">Hello with Link</LargeCustomButton>
    <br ></br>
    <CustomButton2 textColor="black" bgColor="yellow" fontSize="2rem">Hello</CustomButton2>
    <CustomButton2 textColor="yellow" bgColor="black">Hello</CustomButton2>
  </div>
}

export default App;