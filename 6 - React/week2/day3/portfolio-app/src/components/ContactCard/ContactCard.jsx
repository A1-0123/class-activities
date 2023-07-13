import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    border: 1px solid white;
    min-width: 204px;
    min-height: 141px;
    width: auto;
    height: auto;

    font-size: 1rem;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    #contact-info{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        p{
            display: flex;
            align-items: center;
            img{
                margin-right: 0.5rem;
            }
        }
    }
`;

const ContactCard = ({title="Message me here", contactInfo=[{id: 1, icon: "./images/discord.png", value:"!Elias#3519"}, {id: 2, icon: "./images/email.png", value:"elias@elias.me"}]}) => {
  return (
    <Wrapper>
        <h2>{title}</h2>
        
        <div id='contact-info'>
            {
                contactInfo.map((contact) => <p key={contact.id}><img src={contact.icon} alt="" /> <span>{contact.value}</span></p>)
            }
        </div>
    </Wrapper>
  )
}

export default ContactCard