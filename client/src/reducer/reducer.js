import {  
  
  GET_ALL_COURSES, 
  GET_ALL_CATEGORIES, 
  GET_DETAIL_COURSES,
  GET_COURSE_BY_NAME, 
  ORDER_BY_NAME,
  ORDER_BY_SCORE,
  ORDER_BY_PRICE,
  FILTER_BY_CATEGORIES,
  FILTER_BY_DURATION

} from "../actions/constants.js";

const initialState = {

  getAllCourses: [],
  setAllCourses: [],
  getAllCategories: [],
  getCourseDetail: {},
  
};

function rootReducer(state = initialState, action) {
  
  switch (action.type) {
    
    case GET_ALL_COURSES: {
      return {
        ...state,
        getAllCourses: action.payload,
        setAllCourses: action.payload,
      };
    }

    case GET_ALL_CATEGORIES: {
      return {
        ...state,
        getAllCategories: action.payload,
      };
    }

    case GET_DETAIL_COURSES: {
      return {
        ...state, 
        getCourseDetail: action.payload
      }
    }

    case GET_COURSE_BY_NAME: {
      return {
        ...state, 
        getAllCourses: action.payload
      }
    }

    case ORDER_BY_NAME : {
      return {
        ...state,
        getAllCourses: action.payload
      }
    }
    
    case ORDER_BY_SCORE: {
      return {
        ...state, 
        getAllCourses: action.payload
      }
    }

    case ORDER_BY_PRICE: {
      return {
        ...state, 
        getAllCourses: action.payload
      }
    } 
    
    case FILTER_BY_CATEGORIES:{
      return{
        ...state,
        getAllCourses: action.payload
      }
    }

    case FILTER_BY_DURATION:{
      return{
        ...state,
        getAllCourses: action.payload
      }
    }

    default: return state;
  }
}

export default rootReducer;
