import React from 'react'
import styled from 'styled-components';

const SkillCardContainer = styled.div`
    border: 1px solid #ABB2BF;
    max-width: 196px;
    height: fit-content;
    #top{
        padding: 0.5rem;
        border-bottom: 1px solid white;
        h3{
            font-size: 1rem;
        }
    }
    #bottom{
        padding: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        span{
            color: #ABB2BF;
            font-size: 1rem;
            
        }
    }
`;


const SkillCard = ({title="Languages", values=["TypeScript", "JavaScript", "Python"]}) => {
  return (
    <SkillCardContainer>
        <div id='top'>
            <h3>{title}</h3>
        </div>
        <div id='bottom'>
            {
                values.map((value, index) => {
                    return <span key={index}>{value}</span>
                })
            }
        </div>
    </SkillCardContainer>
  )
}

export default SkillCard