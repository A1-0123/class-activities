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
            .custom-btn{
              border: 1px solid white;
              padding: 0.5rem 1rem;
              border-radius: 5px;
              background-color: black;
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
            <Link className='custom-btn' to="/add-post">+ Post</Link>
          </li>
          <li>
            <Link className='custom-btn' to="/add-comment">+ Comment</Link>
          </li>
        </ul>
      </NavContainer>
  )
}

export default Nav