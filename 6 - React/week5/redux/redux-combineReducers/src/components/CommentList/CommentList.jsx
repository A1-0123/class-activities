import { useSelector } from "react-redux";
import styled from "styled-components";

const CommentListContainer = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const CommentList = () => {
  const comments = useSelector(state => state.comment.comments);

  return (
    <CommentListContainer>
      {
        comments.map(comment => {
          return <div key={comment.id}>
            <h3>{comment.title} <span style={{fontSize: "16px"}}>{comment.author}</span></h3>
            <p>{comment.message}</p>
          </div>
        })
      }
    </CommentListContainer>
  )
}

export default CommentList