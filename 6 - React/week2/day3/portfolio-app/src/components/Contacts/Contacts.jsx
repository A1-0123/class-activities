import React from 'react'
import styled from 'styled-components'
import ContactCard from '../ContactCard/ContactCard';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    #text{
        max-width: 505px;
        color: #ABB2BF;
    }
`;

const Contacts = ({paragraph="I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me"}) => {
  return (
    <Wrapper>
        <div id='text'>
            <p>{paragraph}</p>
        </div>
        <ContactCard />
    </Wrapper>
  )
}

export default Contacts