import {  
  
  GET_ALL_COURSES, 
  GET_COURSE_BY_NAME, 

} from "../actions/constants.js";

const initialState = {
  
  getAllCourses: [],
  setAllCourses: [],

};

const getCourses = (state = initialState, action) => {

  switch(action.type){
    
    case GET_ALL_COURSES: {
      return {
        ...state,
        getAllCourses: action.payload,
        setAllCourses: action.payload,
      };
    }
    
    case GET_COURSE_BY_NAME: {
      return {
        ...state, 
        getAllCourses: action.payload
      }
    } 
    default: return state
  }
}

export default getCourses;
  