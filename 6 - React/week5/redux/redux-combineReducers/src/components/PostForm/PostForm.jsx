import { addPost } from "../../actions/postActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const PostForm = () => {
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
    dispatch(addPost(formData));
    clearForm();
    navigate("/");  
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <h2>Post Form</h2>
        <p>You can add some post here.</p>
      </div>
      <div className="form-elements">
        <label htmlFor="">Title</label>
        <input value={formData.title} onChange={handleChange} name="title" id="title" type="text" />
      </div>

      <div className="form-elements">
        <label htmlFor="">Content</label>
        <textarea
          value={formData.content}
          onChange={handleChange}
          name="content"
          id="content"
          type="text"
        />
      </div>

      <div className="form-elements">
        <label htmlFor="">Author</label>
        <input value={formData.author} onChange={handleChange} name="author" id="author" type="text" />
      </div>

      <div className="form-elements">
        <label htmlFor="">Cover Image Url</label>
        <input
          value={formData.coverImage}
          onChange={handleChange}
          name="coverImage"
          id="coverImage"
          type="text"
        />
      </div>

      <button type="submit">Add Post</button>
    </Form>
  );
};

export default PostForm;

// { => POST MODEL
//   id: String,
//   title: String,
//   content: String,
//   author: String,
//   coverImage: String,
// }
