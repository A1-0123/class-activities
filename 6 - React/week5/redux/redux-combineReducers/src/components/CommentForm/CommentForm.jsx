import { addPost } from "../../actions/postActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { addComment } from "../../actions/commentActions";

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

const CommentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    coverImage: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      title: "",
      content: "",
      author: "",
      coverImage: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addComment(formData));
    clearForm();
    navigate("/");  
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <h2>Comment Form</h2>
        <p>You can add some comment here.</p>
      </div>
      <div className="form-elements">
        <label htmlFor="">Title</label>
        <input value={formData.title} onChange={handleChange} name="title" id="title" type="text" />
      </div>

      <div className="form-elements">
        <label htmlFor="">Message</label>
        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          id="message"
          type="text"
        />
      </div>

      <div className="form-elements">
        <label htmlFor="">Author</label>
        <input value={formData.author} onChange={handleChange} name="author" id="author" type="text" />
      </div>

      <button type="submit">Add Comment</button>
    </Form>
  );
};

export default CommentForm;

// { => POST MODEL
//   id: String,
//   title: String,
//   content: String,
//   author: String,
//   coverImage: String,
// }
