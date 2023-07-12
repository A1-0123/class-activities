import React from 'react'
import styled from 'styled-components'
import Button from "../Button/Button"

const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`;

const Wrapper = styled.div``;

const CustomSpan = styled.span`
    color: #C778DD;
`;

const Hero = () => {
  return (
    <HeroContainer>
        <Wrapper>
            <h1>Maiko is a <CustomSpan>front-end developer</CustomSpan> and <CustomSpan>full-stack developer</CustomSpan></h1>
            <p>He crafts responsive websites where technologies meet creativity</p>
            <Button title={"Contact me!!"} borderColor="#C778DD"/>
        </Wrapper>
        <Wrapper>
            <img src="./images/pattern1.png" alt="" />
            <img src="./images/heroImage.png" alt="" />
            <img src="./images/pattern2.png" alt="" />
        </Wrapper>
    </HeroContainer>
  )
}

export default Hero