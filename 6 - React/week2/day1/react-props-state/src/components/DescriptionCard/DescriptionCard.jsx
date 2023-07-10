import React from 'react'
import "./DescriptionCard.css"

const DescriptionCard = ({title, icon, job, description, keyword, rangeOfSalary}) => {
  return (
    <div className='descCard'>
        <div className='descCard-top'>
            <img src={icon} alt="" />
            <div className='descCard-top-info'>
                <h2>{title}</h2>
                <p>{job}</p>
            </div>
        </div>
        <div className='descCard-middle'>
            <p>{description}</p>
        </div>
        <div className='line'></div>
        <div className='descCard-bottom'>
            <div className='keyword'>{keyword}</div>
            <p>{rangeOfSalary}</p>
        </div>
    </div>
  )
}

export default DescriptionCard