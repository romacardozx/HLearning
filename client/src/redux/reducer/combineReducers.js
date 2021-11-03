import { combineReducers } from "redux";
import getCoursesReducer from "./getCoursesReducer"
import ordersReducer from "./ordersReducer";
import filtersReducer from "../reducer/filtersReducer";
import getCategoriesReducer from "../reducer/getCategoriesReducer";
import getCourseDetailReducer from "../reducer/getCourseDetailReducer";

export default combineReducers({
    
    getCoursesReducer,
    ordersReducer,
    filtersReducer,
    getCategoriesReducer,
    getCourseDetailReducer

});

