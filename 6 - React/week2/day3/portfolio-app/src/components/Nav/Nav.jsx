import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.nav`
    ul{
        display: flex;
        gap: 2rem;
        align-items: center;
        h1{
            margin-right: auto;
        }
        li{
            list-style: none;
            a{
                text-decoration: none;
                color: #ABB2BF;
                &:hover{
                    color: #fff;
                }
            }
        }
    }
`;

const Nav = () => {
  return (
    <NavContainer>
        <ul>
            <h1>Maiko</h1>
            <li>
                <a href="#home">#home</a>
            </li>
            <li>
                <a href="#works">#works</a>
            </li>
            <li>
                <a href="#about-me">#about-me</a>
            </li>
            <li>
                <a href="#contracts">#contracts</a>
            </li>
        </ul>
    </NavContainer>
  )
}

export default Nav