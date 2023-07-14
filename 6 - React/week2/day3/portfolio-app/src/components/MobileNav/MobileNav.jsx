import React from 'react'
import styled from 'styled-components'

const MobileNavContainer = styled.nav`
    @media (min-width: 570px) {
        display: none;
    }
    ul{
        display: flex;
        justify-content: space-between;
        h3{

        }
        button{
            background: none;
            border: none;
        }
    }
`;

const MobileNav = () => {
  return (
    <MobileNavContainer>
        <ul>
            <h3>Maiko</h3>
            <button>
                <img src="./images/mobile-menu-icon.png" alt="mobile-menu-icon" />
            </button>
        </ul>
    </MobileNavContainer>
  )
}

export default MobileNav