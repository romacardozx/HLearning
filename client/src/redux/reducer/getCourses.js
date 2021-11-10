import {
  GET_ALL_COURSES,
  GET_COURSE_BY_NAME,
  FILTER_BY_RANGE_PRICE,
  FILTER_BY_CATEGORIES,
  FILTER_BY_DURATION,
  ORDER_BY_NAME,
  ORDER_BY_SCORE,
  ORDER_BY_PRICE,
  GET_COURSES_SCORE,
  FILTER_BY_STARS
} from "../actions/constants.js";

const initialState = {
  getAllCourses: [],
  setAllCourses: [],
};

const getCourses = (state = initialState, action) => {
  switch (action.type) {
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
        getAllCourses: action.payload,
      };
    }

    case FILTER_BY_RANGE_PRICE: {
      return {
        ...state,
        getAllCourses: action.payload,
      };
    }

    case FILTER_BY_CATEGORIES: {
      return {
        ...state,
        getAllCourses: action.payload,
      };
    }

    case FILTER_BY_DURATION: {
      return {
        ...state,
        getAllCourses: action.payload,
      };
    }

    case FILTER_BY_STARS: {
      return {
        ...state,
        getAllCourses: action.payload,
      };
    }

    case ORDER_BY_NAME: {
      return {
        ...state,
        getAllCourses: action.payload,
      };
    }

    case ORDER_BY_SCORE: {
      return {
        ...state,
        getAllCourses: action.payload,
      };
    }

    case ORDER_BY_PRICE: {
      return {
        ...state,
        getAllCourses: action.payload,
      };
    }

    case GET_COURSES_SCORE: {
      return {
        ...state,
        setAllCourses: action.payload,
      };
    }
    default:
      return state;
  }
};

export default getCourses;
