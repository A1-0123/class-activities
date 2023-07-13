import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../ProjectCard/ProjectCard';

const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
`;

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
    }
  ]

const ProjectCardList = () => {
  return (
    <ListWrapper>
        {
            projectsData.map((project) => <ProjectCard {...project} />)
        }
    </ListWrapper>
  )
}

export default ProjectCardList