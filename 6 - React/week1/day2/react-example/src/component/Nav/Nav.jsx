import React from 'react'
import "./Nav.scss"

const Nav = () => {
  return (
    <nav>
        <ul>
            <h1>Logo</h1>
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
    </nav>
  )
}

export default Nav