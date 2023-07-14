import React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import Title from '../../components/Title/Title'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import styled from 'styled-components'

const projectsData = [
  {
    image: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    keywords: ["nature", "landscape", "mountains"],
    title: "Beautiful Mountain Range",
    description: "A stunning view of majestic mountains.",
    url: "https://example.com/image1"
  },
  {
    image: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    keywords: ["animals", "wildlife", "safari"],
    title: "Lion in the Wilderness",
    description: "A powerful lion roaming freely in its natural habitat.",
    url: "https://example.com/image2"
  },
  {
    image: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    keywords: ["architecture", "city", "skyscrapers"],
    title: "City Skyline at Night",
    description: "An illuminated cityscape with tall skyscrapers.",
    url: "https://example.com/image3"
  },
  {
    image: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    keywords: ["architecture", "city", "skyscrapers"],
    title: "City Skyline at Night",
    description: "An illuminated cityscape with tall skyscrapers.",
    url: "https://example.com/image3"
  },
  {
    image: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    keywords: ["architecture", "city", "skyscrapers"],
    title: "City Skyline at Night",
    description: "An illuminated cityscape with tall skyscrapers.",
    url: "https://example.com/image3"
  }
]

const WrapperList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Works = () => {
  return (
    <div>
      <PageTitle title="projects" description='List of my projects' />

      <Title title="complete-apps" />

      <WrapperList>
      {
        projectsData.map((project, index) => {
          return (
            <ProjectCard key={index} {...project} />
          )
        })
      }
      </WrapperList>

      <Title title="small-projects" />

      <WrapperList>
      {
        projectsData.map((project, index) => {
          return (
            <ProjectCard key={index} {...project} noImage={true}/>
          )
        })
      }
      </WrapperList>
    </div>
  )
}

export default Works