import React from 'react'
import styled from 'styled-components';
import Button from '../Button/Button';

const ProjectCardWrapper = styled.div`
    border: 1px solid white;
    max-width: 330px;
`;

const ProjectCardTop = styled.div`
    height: 200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ProjectCardBottom = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3{
        font-size: 1.5rem;
    }

    p{
       color: #ABB2BF;  
       font-size: 1rem;
    }

    #action{
        display: flex;
        gap: 1rem;
    }
`;

const ProjectCardMiddle = styled.div`
    border: 1px solid white;
    padding: 8px;
    display: flex;
    gap: 8px;
    span{
        color: #ABB2BF;
        font-size: 16px;
    }
`;

const ProjectCard = ({ image="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", keywords=["HTML", "SCSS", "REACT", "NODE"], title="ChertNodes", description="Minecraft servers hosting", url, noImage }) => {
  return (
    <ProjectCardWrapper>
        {
            !noImage && <ProjectCardTop>
            <img src={image} alt="" />
        </ProjectCardTop>
        }
        <ProjectCardMiddle>
            {
                keywords.map((keyword, index) => {
                    return <span key={index}>{keyword}</span>
                })
            }
        </ProjectCardMiddle>
        <ProjectCardBottom>
            <h3>{title}</h3>
            <p>{description}</p>

            <div id='action'>
                <Button title="Live" borderColor="#C778DD" />
                <Button title="Cache" borderColor="#ABB2BF" />
            </div>
        </ProjectCardBottom>
    </ProjectCardWrapper>
  )
}

export default ProjectCard