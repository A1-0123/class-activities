import { ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from "../actions/commentActions";

const initialState = {
    comments: [],
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if(comment.id === action.payload.id) {
                        return action.payload
                    }else {
                        return comment
                    }
                })
            }
        case DELETE_COMMENT:
            return state;
        default:
            return state;
    }
}

export default commentReducer;