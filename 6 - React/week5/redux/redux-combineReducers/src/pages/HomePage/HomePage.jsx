import PostList from "../../components/PostList/PostList"
import CommentList from "../../components/CommentList/CommentList"
const HomePage = () => {
  return (
    <div>
        <h2>Blog Posts</h2>
        <PostList />

        <h2>Blog Comments</h2>
        <CommentList />
    </div>
  )
}

export default HomePage