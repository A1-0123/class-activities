import React from 'react'
import styled from 'styled-components'

const PageTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 3.5rem 0 1rem 0;
    h2{
        font-size: 2rem;
        span{
            color: #C778DD;
        }
    }
    p{
        font-size: 1rem;
    }
`;

const PageTitle = ({title="about-me", description="Who am i?"}) => {
  return (
    <PageTitleWrapper>
        <h2><span>/</span>{title}</h2>
        <p>{description}</p>
    </PageTitleWrapper>
  )
}

export default PageTitle