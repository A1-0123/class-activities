import PostList from "../../components/PostList/PostList"
import { fetchPosts } from "../../actions/postActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1{
        margin-bottom: 1rem;
    }
`;

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    const {loading, error} = useSelector(state => state.posts);
  return (
    <HomeContainer>
        <h1>Blogs</h1>

        {
            loading ? "Loading..." : <PostList />
        }

        {
            error ? "Sorry, try to refresh the page after couple seconds" : ""
        }
        
    </HomeContainer>
  )
}

export default Home