import { TODO } from "../actions/todoAction";

const initState = {
    list: [],
    body: {}
}

const todoReducer = (state =initState, action) => {
    switch (action.type) {

        case TODO.LOAD:
            return {
                ...state
            }
        case TODO.LOAD_SUCCESS:
            return {
                ...state,
                list: action.list
            }

        case TODO.INIT_TODO:
            return {
                ...state,
                body: action.body
            }
       
        default:
            return state;
    }
};


export default todoReducer;