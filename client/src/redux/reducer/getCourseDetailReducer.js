import {  

    GET_DETAIL_COURSES,

} from "../actions/constants.js";
  
const initialState = {

    getCourseDetail: {},

};

const getCourseDetailReducer = (state = initialState, action) => {
    
    switch(action.type){
        
        case GET_DETAIL_COURSES: {
            return {
              ...state, 
              getCourseDetail: action.payload
            }
        }

        default: return state;
    }
}

export default getCourseDetailReducer;