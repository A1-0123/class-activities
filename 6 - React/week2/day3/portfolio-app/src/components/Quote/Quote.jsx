import React from 'react'
import styled from 'styled-components'

const QuoteWrapper = styled.div`
    margin: 6rem auto;
    width: fit-content;
    position: relative;

    .quote-section{
        border: 1px solid white;
    }
    #text{
        padding: 2rem; //1rem = 16px
        img{
            position: absolute;
            top:-20px;
            left:20px;
            background-color: #282C33;
            padding: 0.5rem;
        }
    }

    #author{
        padding: 1rem; //1rem = 16px
        position: absolute;
        right: 0;
        img{
            position: absolute;
            top:-20px;
            right:20px;
            background-color: #282C33;
            padding: 0.5rem;
        }
    }
`;

const Quote = ({text="With great power comes great electricity bill", author="Dr. Who"}) => {
  return (
    <QuoteWrapper>
        <div className='quote-section' id='text'>
            {text}
            <img src="./images/quote.png" alt="" />
        </div>
        <div className='quote-section' id='author'>
            - {author}
            <img src="./images/quote.png" alt="" />
        </div>
    </QuoteWrapper>
  )
}

export default Quote