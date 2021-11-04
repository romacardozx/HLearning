import {  
  
    FILTER_BY_CATEGORIES,
    FILTER_BY_DURATION,
    FILTER_BY_RANGE_PRICE

} from "../actions/constants.js";

const initialState = {
    
    setAllCourses: [],

};

const filters = (state = initialState, action) =>{

    switch(action.type){

        case FILTER_BY_RANGE_PRICE: {
            return {
                ...state, 
                setAllCourses: action.payload
            }
        }
            
        case FILTER_BY_CATEGORIES:{
            return{
                ...state,
                setAllCourses: action.payload
            }
        }
        
        case FILTER_BY_DURATION:{
            return{
                ...state,
                setAllCourses: action.payload
            }
        }

        default: return state;
    }
}

export default filters;