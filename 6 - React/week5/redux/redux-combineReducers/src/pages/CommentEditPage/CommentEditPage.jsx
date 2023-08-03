import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { updatePost } from '../../actions/postActions';
import { useNavigate } from 'react-router-dom';
import { updateComment } from '../../actions/commentActions';

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

const CommentEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComment] = useState({});
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);

  useEffect(() => {
    const comment = comments.find(comment => comment.id === id);
    setComment(comment);
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateComment(comment));
    navigate('/');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <h2>Edit Comment Form</h2>
        <p>You can edit comment here.</p>
      </div>
      <div className="form-elements">
        <label htmlFor="">Title</label>
        <input onChange={handleChange} value={comment.title} name="title" id="title" type="text" />
      </div>

      <div className="form-elements">
        <label htmlFor="">Message</label>
        <textarea
          onChange={handleChange}
          value={comment.message}
          name="message"
          id="message"
          type="text"
        />
      </div>

      <button type="submit">Edit Comment</button>
    </Form>
  )
}

export default CommentEditPage