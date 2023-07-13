import React from "react";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import Title from "./components/Title/Title";
import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {

  return <div>
    <Nav />
    <Hero />
    <Quote text="With great power comes great electricity bill" author="Dr. Who"/>
    <Title id="projects" title="projects" />
    <ProjectCardList />
    <Title id="skills" title="skills" />
    {/* TODO: skills will be assignment */}
    <Title id="about-me" title="about-me" />
    {/* TODO: about-me will be assignment */}
    <Title id="contact" title="contact" />
    <Contacts />
    <Footer/ >
  </div>
}

export default App;