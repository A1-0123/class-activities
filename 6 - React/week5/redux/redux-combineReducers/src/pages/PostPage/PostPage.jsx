import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Banner = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const PostPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const PostPage = () => {
    const posts = useSelector(state => state.post.posts);
    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        posts.map(post => {
            if (post.id === id) {
                setPost(post);
            }
        })
    }, [id]);

  return (
    <PostPageContainer>
        <Banner src={post.coverImage} ></Banner>
        <h1>{post.title} <span style={{fontSize: "16px", marginLeft: "0.5rem"}}>{post.author}</span></h1>
        <p>{post.content}</p>
    </PostPageContainer>
  )
}

export default PostPage