import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import styled from 'styled-components'

const Nav = styled.nav`
  ul{
    display: flex;
    align-items:center;
    gap: 1rem;
    padding: 1rem 0 1rem 0;
    border-bottom: 1px solid white;
    margin-bottom: 1rem;
    li{
      list-style: none;
      a{
        color: white;
      }
    }
    h1{
      margin-right: auto;
    }
  }
`;

const Footer = styled.footer`
  padding: 1rem 0 1rem 0;
  border-top: 1px solid white;
  margin-top: 1rem;
  p{
    color: white;
    text-align: center;
  }
`;

function App() {

  return (
    <Router>
      <Nav>
        <ul>
          <h1>Blog.</h1>
          <li>
            <Link to={"/"} >Home</Link>
          </li>
          <li>
            <Link to={"/about"} >About</Link>
          </li>
        </ul>
      </Nav>
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
      <Footer>
        <p>&copy;A1-0123, created by A1-0123 classroom</p>
      </Footer>
    </Router>
  )
}

export default App
