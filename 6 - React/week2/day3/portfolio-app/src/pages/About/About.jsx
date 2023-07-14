import React from 'react'
import styled from 'styled-components'
import AboutMe from '../../components/AboutMe/AboutMe';
import PageTitle from '../../components/PageTitle/PageTitle';

const AboutMeContainer = styled.div``;

const About = () => {
  return (
    <AboutMeContainer>
      <PageTitle />
      <AboutMe />
    </AboutMeContainer>
  )
}

export default About