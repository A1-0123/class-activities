import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
    margin-top: 2rem;
    border-top: 1px solid #ABB2BF;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    #top{
        display: flex;
        justify-content: space-between;
        #left{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            h2{
                font-size: 1rem;
                span{
                    color: #ABB2BF;
                }
            }
        }
        #right{
            h3{
                margin-bottom: 1rem;
            }
        }
    }
    #bottom{
        text-align: center;
        font-size: 1rem;
        color: #ABB2BF;
    }
`;

const Footer = ({
    socials=[
    {
        id: 1,
        icon: "./images/github.png",
        link: ""
    },
    {
        id: 2,
        icon: "./images/figma.png",
        link: ""
    },
    {
        id: 3,
        icon: "./images/discord.png",
        link: ""
    }]
}) => {
  return (
    <Wrapper>
        <div id='top'>
            <div id='left'>
                <h2>Maiko <span>maiko@gmail.com</span></h2>
                <p>Front-end Developer</p>
            </div>
            <div id='right'>
                <h3>Media</h3>
                {
                    socials.map((social) => <img key={social.id} src={social.icon} alt={social.link} />)
                }
            </div>
        </div>

        <div id='bottom'>
            <p>&copy; Copyright 2023. Made by Maiko</p>
        </div>
    </Wrapper>
  )
}

export default Footer