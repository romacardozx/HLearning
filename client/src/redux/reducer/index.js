import { combineReducers } from "redux";
import getCourses from "./getCourses"
import getCategories from "./getCategories";
import getDetails from "./getDetails";
import filters from "./filters";
import orders from "./orders";

export default combineReducers({

    getCourses,
    getCategories,
    getDetails,
    orders,
    filters
    
})