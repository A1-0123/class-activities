import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav`
    ul{
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 2rem 0;
        li{
            list-style: none;
            a{
                color: white;
                font-size: 20px;
            }
        }
        h1{
            margin-right: auto;
        }
    }
`;
const Nav = () => {
  return (
    <NavContainer>
        <ul>
          <h1>Blog.</h1>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/add-post">Add Post</Link>
          </li>
        </ul>
      </NavContainer>
  )
}

export default Nav