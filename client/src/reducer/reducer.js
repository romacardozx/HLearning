import { GET_ALL_COURSES, GET_ALL_CATEGORIES } from "../actions/constants.js";

const initialState = {
  getAllCourses: [],
  setAllCourses: [],
  getAllCategories: [],
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
    default:
      return state;
  }
}

export default rootReducer;
