import PostCard from "../Card/PostCard";
import { useSelector } from "react-redux";
import styled from "styled-components";

const PostListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1rem;
`;

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);

  return <PostListContainer>
    {
        posts.map(post => {
            const { attributes, id } = post;
            return <PostCard key={id} {...attributes} />
        })
    }
  </PostListContainer>;
};

export default PostList;
