import { useSelector } from "react-redux";
import PostCard from "../Card/PostCard/PostCard";
import styled from "styled-components";

const PostListContainer = styled.div`
  padding: 2rem 0;
  
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const PostList = () => {
  const posts = useSelector(state => state.posts);

  return (
    <PostListContainer>
      {
        posts.map(post => {
          return <PostCard key={post.id} {...post} />
        })
      }
    </PostListContainer>
  )
}

export default PostList