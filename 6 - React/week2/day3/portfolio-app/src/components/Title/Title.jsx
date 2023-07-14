import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 2.5rem 0;
    font-size: 32px;
    span{
        color: #C778DD;
    }
    #line{
        margin-left: 1rem;
        width: 50%;
        height: 2px;
        background-color: #C778DD;
        display: inline-block;
        
    }
`;

const Title = ({title, isLine}) => {
  return (
    <TitleWrapper><span>#</span>{title} 

    {isLine && <span id='line'></span>}
    
    </TitleWrapper>
  )
}

export default Title