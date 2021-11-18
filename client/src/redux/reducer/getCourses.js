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
  FILTER_BY_STARS,
  ORDER_BY_NAME_FILTER,
  ORDER_BY_PRICE_FILTER,
  ORDER_BY_SCORE_FILTER
} from "../actions/constants.js";
import calculeScore from "../../utils/calculeScore"

const initialState = {
  getAllCourses: [],
  setAllCourses: undefined,
  filteredString: "Filter By",
};

const getCourses = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COURSES: {
      return {
        ...state,
        getAllCourses: action.payload.allCourses,
        filteredString: action.payload.name,
      };
    }

    case GET_COURSE_BY_NAME: {
      return {
        ...state,
        setAllCourses: action.payload.data,
        filteredString: action.payload.name,
      };
    }

    case FILTER_BY_RANGE_PRICE: {
      return {
        ...state,
        setAllCourses: action.payload.filterData,
        filteredString: action.payload.name,
      };
    }

    case FILTER_BY_CATEGORIES: {
      return {
        ...state,
        setAllCourses: action.payload.filterData,
        filteredString: action.payload.name,
      };
    }

    case FILTER_BY_DURATION: {
      return {
        ...state,
        setAllCourses: action.payload.data,
        filteredString: action.payload.name,
      };
    }

    case FILTER_BY_STARS: {
      return {
        ...state,
        setAllCourses: action.payload.data,
        filteredString: action.payload.name,
      };
    }

    case ORDER_BY_NAME: {
      return {
        ...state,
        getAllCourses: action.payload,
      };
    }

    case ORDER_BY_NAME_FILTER: {
      console.log(action.payload, "Datos del action!!!");
      let sortedFilters =
        action.payload.name === "A-Z"
          ? action.payload.data.sort((a, b) => {
              if (a.title > b.title) return 1;
              if (a.title < b.title) return -1;
              return 0;
            })
          : action.payload.data.sort(function (a, b) {
              if (a.title < b.title) return 1;
              if (a.title > b.title) return -1;
              return 0;
            });
      console.log(sortedFilters, "Filtros ordenadossss");

      return {
        ...state,
        setAllCourses: sortedFilters,
        filteredString: action.payload.name,

      };
    }

    case ORDER_BY_SCORE: {
      return {
        ...state,
        getAllCourses: action.payload,
      };
    }

    case ORDER_BY_SCORE_FILTER: {
      console.log(action.payload, "Datos del action!!!");
      let sortedFilters =
        action.payload.score === "Asc"
          ? action.payload.data.sort((a, b) => {
            if (calculeScore(a.score) < calculeScore(b.score)) return 1;
            if (calculeScore(a.score) > calculeScore(b.score)) return -1;
            return 0;
            })
          : action.payload.data.sort(function (a, b) {
            if (calculeScore(a.score) < calculeScore(b.score)) return -1;
            if (calculeScore(a.score) > calculeScore(b.score)) return 1;
            return 0;
            });
      console.log(sortedFilters, "Filtros ordenadossss");

      return {
        ...state,
        setAllCourses: sortedFilters,
        filteredString: action.payload.score,
      };
    }

    case ORDER_BY_PRICE: {
      return {
        ...state,
        getAllCourses: action.payload,
      };
    }

    case ORDER_BY_PRICE_FILTER: {
      console.log(action.payload, "Datos del action!!!");
      let sortedFilters =
        action.payload.price === "Asc"
          ? action.payload.data.sort((a, b) => {
              if (a.price < b.price) return 1;
              if (a.price > b.price) return -1;
              return 0;
            })
          : action.payload.data.sort(function (a, b) {
              if (a.price < b.price) return -1;
              if (a.price > b.price) return 1;
              return 0;
            });
      console.log(sortedFilters, "Filtros ordenadossss");

      return {
        ...state,
        setAllCourses: sortedFilters,
        filteredString: action.payload.price,
      };
    }

    case GET_COURSES_SCORE: {
      return {
        ...state,
        getAllCourses: action.payload,
      };
    }
    default:
      return state;
  }
};

export default getCourses;
