import { 
    GET_ALL_COURSES, 
    GET_ALL_CATEGORIES 
} from '../actions/constants.js'

const initialState = {

    getAllCurses : [],
    setAllCurses : [],
    getAllCategories: []
}

function rootReducer(state = initialState, action){
    
    switch(action.type){

        case GET_ALL_COURSES: {
            return{
                ...state,
                getAllCurses: action.payload,
                setAllCurses: action.payload
            }}
        case GET_ALL_CATEGORIES: {
            return{
                ...state, 
                getAllCategories: action.payload
            }}
        default: return state 
    }
}

export default rootReducer;