import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 320px;
  img{
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const PostCard = ({
    id, author, bannerImage, createdAt, title, short_description
}) => {
  return (
    <CardContainer>
        <img src={bannerImage} alt={title + " " + createdAt} />
        <div>
            <h3>{title} <span style={{fontSize: "12px", color: "orange"}}>{author.name}</span></h3>
            <p>{short_description}</p>
            <p>{Date(createdAt)}</p>
        </div>
    </CardContainer>
  )
}

export default PostCard;