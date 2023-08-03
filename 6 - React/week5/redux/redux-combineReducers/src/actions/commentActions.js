import { v4 as uuidv4 } from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: {
        id: uuidv4(),
        ...comment
    }
})

export const updateComment = (comment) => ({
    type: UPDATE_COMMENT,
    payload: {
        ...comment
    }
})

export const deleteComment = (commentId) => ({
    type: DELETE_COMMENT,
    payload: commentId
})