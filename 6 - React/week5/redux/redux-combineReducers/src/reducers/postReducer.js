import { ADD_POST, UPDATE_POST, DELETE_POST } from '../actions/postActions';

const initialState = {
    posts: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.id) {
                        return action.payload
                    }else {
                        return post
                    }
                })
            }
        case DELETE_POST:
            // some logic then return
            return state;
        default:
            return state;
    }
}

export default postReducer;