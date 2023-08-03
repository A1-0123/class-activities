import { legacy_createStore as createStore } from 'redux';
import postReducer from './reducers/postReducer';

const store = createStore(
    postReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;