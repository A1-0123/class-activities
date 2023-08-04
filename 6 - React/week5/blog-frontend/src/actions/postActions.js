import axios from "axios";
import strapiApi from "../api/strapiApi";

// Action Types
export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const CREATE_POSTS_REQUEST = "CREATE_POSTS_REQUEST";
export const CREATE_POSTS_SUCCESS = "CREATE_POSTS_SUCCESS";
export const CREATE_POSTS_FAILURE = "CREATE_POSTS_FAILURE";


// Action Creators

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const createPostsRequest = () => ({
  type: CREATE_POSTS_REQUEST
})

export const createPostsSuccess = (post) => ({
  type: CREATE_POSTS_SUCCESS,
  payload: post
})

export const createPostsFailure = (error) => ({
  type: CREATE_POSTS_FAILURE,
  payload: error
})

// Async Action For Fetching Posts
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get(`${strapiApi}` + "/api/tests")
      .then((response) => {
        dispatch(fetchPostsSuccess(response.data.data));
      })
      .catch((err) => {
        dispatch(fetchPostsFailure(err));
      });
  };
};

export const createPosts = (data) => {
  return (dispatch) => {
    dispatch(createPostsRequest());
    axios.post(`${strapiApi}` + "/api/tests", data)
      .then((response) => {
        console.log(response);
        dispatch(fetchPosts()); //
      })
      .catch((err) => {
        dispatch(createPostsFailure(err))
      })
  }
}
