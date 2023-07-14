import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";

const NavContainer = styled.nav`
  @media (max-width: 570px) {
    display: none;
  }

  padding: 1rem 0 0.5rem 0;

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    h1 {
      margin-right: auto;
    }
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: #abb2bf;
        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

const AbsoluteLine = styled.div`
  position: absolute;
  top: 0;
  left: 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  #line {
    width: 1px;
    height: 100px;
    border: 1px solid #abb2bf;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


const Nav = () => {
  return (
    <div>
      <NavContainer>
        <ul>
          <h1>Maiko</h1>
          <li>
            <Link to="/">#home</Link>
          </li>
          <li>
            <Link to="/works">#works</Link>
          </li>
          <li>
            <Link to="/about">#about-me</Link>
          </li>
          <li>
            <Link to="/contacts">#contracts</Link>
          </li>
        </ul>

        <AbsoluteLine>
          <div id="line"></div>
          <a href="https://www.github.com/maiko" target="_blank">
            <img src="./images/github.png" alt="github-icon" />
          </a>
          <a href="" target="_blank">
            <img src="./images/discord.png" alt="discord-icon" />
          </a>
          <a href="" target="_blank">
            <img src="./images/figma.png" alt="figma-icon" />
          </a>
        </AbsoluteLine>
      </NavContainer>
      <MobileNav />
    </div>
  );
};

export default Nav;
