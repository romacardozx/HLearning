import { combineReducers } from "redux";
import getCourses from "./getCourses"
import getCategories from "./getCategories";
import getDetails from "./getDetails";

export default combineReducers({

    getCourses,
    getCategories,
    getDetails,    
})