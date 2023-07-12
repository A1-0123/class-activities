import React from 'react'
import "./ProjectCard.scss"

const ProjectCard = ({id, image="https://images.unsplash.com/photo-1688999558024-0bbeac1c0102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60", keywords=["HTML", "SCSS", "JAVASCRIPT"], title="Title", description="Description", url}) => {
  return (
    <div className='projectCard'>
        <div className="projectCard-top">
            <img src={image} alt={id + title} />
        </div>
        <div className="projectCard-mid">
            {
                keywords.map((item) => {
                    return <span>{item}</span>
                })
            }
        </div>
        <div className="projectCard-bottom">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="projectCard-bottom-actions">
                {
                    url ? <button className="live-btn">Live</button> : null //ternary operator
                }
                <button className="cached-btn">Cached</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard


// url ? <button className="live-btn">Live</button> : ""
// if(url){
//     return <button className="live-btn">Live</button>
// } else {
//     return ""
// }

// ternary operator
// condition ? true : false