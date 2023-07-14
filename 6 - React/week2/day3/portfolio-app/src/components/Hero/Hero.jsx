import React from 'react'
import styled from 'styled-components'
import Button from "../Button/Button"

const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    // flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    margin: 5rem 0;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: start;
`;

const ImageWrapper = styled.div`
    position: relative;
    max-width: 457px;
    #pattern1{
        z-index: -1;
        top: 100px;
    }
    #image{
        z-index: 0;
    }
    #pattern2{
        z-index: 1;
        right: 25px;
        bottom: 60px;
    }
`;

const AbsoluteImage = styled.img`
    position: absolute;
`;

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
        <ImageWrapper>
            <AbsoluteImage id='pattern1' src="./images/pattern1.png" alt="" />
            <img id='image' src="./images/heroImage.png" alt="" />
            <AbsoluteImage id='pattern2' src="./images/pattern2.png" alt="" />
        </ImageWrapper>
    </HeroContainer>
  )
}

export default Hero