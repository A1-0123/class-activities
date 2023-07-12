import React from 'react'
import styled from 'styled-components'

const CustomButton = styled.button`
    color: ${props => props.dark ? "white" : props.orange ? "orange" : "black"};
    background: ${props => props.dark ? "black" : props.orange ? "white" : "orange"};
    padding: 10px;
    border: ${props => props.dark ? "none" : "1px solid black"};
    border-radius: 6px;
    font-size: 1rem;
`;

const Button = ({ dark, orange }) => {
  return (
    <CustomButton dark={dark} orange={orange}>Button</CustomButton>
  )
}

export default Button