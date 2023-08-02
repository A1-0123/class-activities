import { legacy_createStore as createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for redux devtools
);

export default store;