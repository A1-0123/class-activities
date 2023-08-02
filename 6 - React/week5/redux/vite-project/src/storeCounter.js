// import { legacy_createStore as createStore } from "redux";

// const initialState = {
//     value: 0,
// }

// function counterReducer(state = initialState, action){
//     switch(action.type){
//         case "INCREMENT":
//             return { value: state.value + 1 }
//         case "DECREMENT":
//             return { value: state.value - 1 }
//         case "RESET":
//             return { value: 0 }
//         case "INCREMENT_BY_AMOUNT":
//             return { value: state.value + action.payload }
//         default:
//             return state;
//     }
// }

// const store = createStore(counterReducer);

// export default store;