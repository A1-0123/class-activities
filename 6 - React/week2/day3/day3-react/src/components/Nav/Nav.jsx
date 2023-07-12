import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  color: black;
  
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    li {
      a {
          text-decoration: none;
          padding: 10px;
          color: black;
      }
    }
  }
`;

const Logo = styled.h1`
  color: ${props => props.light ? "black": "orange"};
  background: ${props => props.light ? "white" : "black"}
  margin-right: auto;
  font-size: 1.5rem;
`;

// const customUl = styled.ul`
//     list-style-type: none;
// `;

// const customLi = styled.li`
//     display: inline-block;
// `;

// const customA = styled.a`
//     text-decoration: none;
//     color: white;
//     padding: 10px;
// `;

const Nav = () => {
  return (
    <NavContainer>
      <ul>
        <Logo light>Logo</Logo>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;
