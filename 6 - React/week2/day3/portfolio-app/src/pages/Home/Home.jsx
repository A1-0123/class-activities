import React from "react";
import styled from "styled-components";

// Components
import Hero from "../../components/Hero/Hero";
import Quote from "../../components/Quote/Quote";
import Title from "../../components/Title/Title";
import ProjectCardList from "../../components/ProjectCardList/ProjectCardList";
import Skills from "../../components/Skills/Skills";
import AboutMe from "../../components/AboutMe/AboutMe";
import Contacts from "../../components/Contacts/Contacts";


const AbsoluteImage = styled.img`
  position: absolute;
`;

const Wrapper = styled.div`
  position: relative;

`;

const WrapperSections = styled.div`
  position: relative;

  #outline-pattern1 {
    top: 0;
    right: -100px;
    width: 91px;
    height: 91px;
  }

  #outline-pattern2{
    top: -20px;
    left: -178px;
  }

  #outline-pattern3{
    top: 230px;
    right: -180px;
    width: 155px;
    height: 155px;
  }

  #outline-pattern4{
    top: 130px;
    left: -230px;
    width: 155px;
    height: 155px;
  }

  #outline-pattern5{
    top: 130px;
    right: -150px;
    width: 100px;
    height: 100px;
  }

  #outline-pattern6{
    top: 30px;
    left: -170px;
    width: 100px;
    height: 100px;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Hero />

      <WrapperSections>
        <Quote
          text="With great power comes great electricity bill"
          author="Dr. Who"
        />
        <AbsoluteImage id="outline-pattern1" src="./images/pattern4.png" />
      </WrapperSections>

      <WrapperSections>
        <Title id="projects" title="projects" isLine={true} />
        <AbsoluteImage id="outline-pattern2" src="./images/pattern2.png" />
        <ProjectCardList />
        <AbsoluteImage id="outline-pattern3" src="./images/pattern4.png" />
      </WrapperSections>

      <Title id="skills" title="skills" isLine={true} />
      <Skills />
      <Title id="about-me" title="about-me" isLine={true} />

      <WrapperSections>
        <AbsoluteImage id="outline-pattern4" src="./images/pattern4.png" />
        <AboutMe />
        <AbsoluteImage id="outline-pattern5" src="./images/pattern2.png" />
      </WrapperSections>

      <Title id="contact" title="contact" isLine={true} />

      <WrapperSections>
        <AbsoluteImage id="outline-pattern6" src="./images/pattern2.png" />
        <Contacts />
      </WrapperSections>
    </Wrapper>
  );
};

export default Home;
