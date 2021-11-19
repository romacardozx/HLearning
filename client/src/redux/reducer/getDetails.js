import {  

    GET_DETAIL_COURSES, GET_DETAIL_COURSES_YOU_BOUGHT,

} from "../actions/constants.js";
  
const initialState = {

    getCourseDetail: {},

};

const getDetails = (state = initialState, action) => {
    
    switch(action.type){
        
        case GET_DETAIL_COURSES: {
            return {
              ...state, 
              getCourseDetail: action.payload
            }
        }
        case GET_DETAIL_COURSES_YOU_BOUGHT: {
            return {
                ...state,
                getCourseDetail: action.payload
            }
        }

        default: return state;
    }
}

export default getDetails;