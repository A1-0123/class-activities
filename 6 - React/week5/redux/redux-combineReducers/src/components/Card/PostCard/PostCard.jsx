/* eslint-disable react/prop-types */
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
const Card = styled.div`
    border: 1px solid #cecece;
    border-radius: 0.5rem;
    padding: 1rem;
    max-width: 300px;
    height: auto;
    img{
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        border-radius: 0.5rem;
    }
    #bottom{
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        overflow: hidden;
        word-wrap: break-word;
    }
`

const PostCard = ({ id, title, content, author, coverImage }) => {
    const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/post/${id}`)}>
        <img src={coverImage} alt={title + " " + author} />
        <div id="bottom">
            <h3>{title}</h3>
            <p>{content.substring(0, 20) + "..."}</p>
            <p>{author}</p>
        </div>
    </Card>
  )
}

export default PostCard