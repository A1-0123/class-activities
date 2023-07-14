import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const AboutMeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    #left {
        width: 515px;
        p{
            margin: 1.5rem 0;
            color: #ABB2BF;
        }
    }
    #right {
        position: relative;
        #about-image{
            width: 340px;
            height: 510px;
            border-bottom: 2px solid #C778DD;
        }

        #pattern1 {
            top: 65px;
        }
        #pattern2{
            top: 320px;
            right: 25px;
        }
    }
`;

const AbsoluteImage = styled.img`
    position: absolute;
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <div id="left">
        <p>Hello, i’m Maiko!</p>
        <p>
          I’m a self-taught front-end developer based in Vancouver, Canada. I
          can develop responsive websites from scratch and raise them into
          modern user-friendly web experiences.
        </p>
        <p>
          Transforming my creativity and knowledge into a websites has been my
          passion for over a year. I have been helping various clients to
          establish their presence online. I always strive to learn about the
          newest technologies and frameworks.
        </p>
        <Button title="Read more ->" borderColor="#C778DD"/>
      </div>
      <div id="right">
        <AbsoluteImage id="pattern1" src="./images/pattern2.png"  />
        <img id="about-image" src="./images/aboutImage.png" alt="" />
        <AbsoluteImage id="pattern2" src="./images/pattern3.png" />
      </div>
    </AboutMeWrapper>
  );
};

export default AboutMe;
