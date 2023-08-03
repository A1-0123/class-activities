import { v4 as uuidv4 } from "uuid";

export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export const addPost = (post) => ({ // action creator is a function which returns an action
    type: ADD_POST,
    payload: {
        id: uuidv4(),
        ...post
    }
});

export const updatePost = (post) => ({
    type: UPDATE_POST,
    payload: {
        ...post
    }
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    payload: postId
})
