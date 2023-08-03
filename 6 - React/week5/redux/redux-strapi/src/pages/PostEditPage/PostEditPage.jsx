import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { updatePost } from '../../actions/postActions';
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  .form-elements{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    input, textarea{
      padding: 0.5rem 0.5rem;
      min-height: 30px;
    }
  }
  button{
    height: 48px;
  }
`;

const PostEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    const post = posts.find(post => post.id === id);
    setPost(post);
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updatePost(post));
    navigate('/');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <h2>Edit Post Form</h2>
        <p>You can edit post here.</p>
      </div>
      <div className="form-elements">
        <label htmlFor="">Title</label>
        <input onChange={handleChange} value={post.title} name="title" id="title" type="text" />
      </div>

      <div className="form-elements">
        <label htmlFor="">Content</label>
        <textarea
          onChange={handleChange}
          value={post.content}
          name="content"
          id="content"
          type="text"
        />
      </div>

      <div className="form-elements">
        <label htmlFor="">Author</label>
        <input onChange={handleChange} value={post.author} name="author" id="author" type="text" />
      </div>

      <div className="form-elements">
        <label htmlFor="">Cover Image Url</label>
        <input
          onChange={handleChange}
          value={post.coverImage}
          name="coverImage"
          id="coverImage"
          type="text"
        />
      </div>

      <button type="submit">Edit Post</button>
    </Form>
  )
}

export default PostEditPage