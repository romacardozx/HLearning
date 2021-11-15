import { combineReducers } from "redux";
import getCourses from "./getCourses"
import getCategories from "./getCategories";
import getDetails from "./getDetails";
import getOrder from "./getOrder";
import getUser from "./getUser";
import userReducer from "./userReducer";

export default combineReducers({
    userReducer,
    getCourses,
    getCategories,
    getDetails,    
    getOrder,    
    getUser    
})