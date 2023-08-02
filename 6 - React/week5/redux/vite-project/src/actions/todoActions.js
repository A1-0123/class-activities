import { v4 as uuidv4 } from 'uuid';

export const addTodo = (todo) => ({ // action creator
    type: "ADD_TODO",
    payload: {
        id: uuidv4(),
        todo,
        completed: false
    }
});

export const deleteTodo = (id) => ({ // action creator
    type: "DELETE_TODO",
    payload: id
});

export const toggleTodo = (id) => ({ // action creator
    type: "TOGGLE_TODO",
    payload: id
});