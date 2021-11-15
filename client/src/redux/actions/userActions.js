import axios from 'axios';
import * as types from "../actions/constants";

export const postSignIn = (input) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post("/auth/login", input);
            console.log("response", data);
            if(data.token){
                dispatch({type: types.POST_SIGN_IN})
                window.localStorage.setItem("user", JSON.stringify(data.token));
                window.location.href = "/home";
            } else {
                window.location.href = "/register";
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getSignOut = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get("/auth/logout")
            console.log("data", data)
            if(data){
            dispatch({type: types.SIGN_OUT_SUCCESS})
            window.localStorage.removeItem("user");
            window.location.href = "/home";
            }
        } catch (error) {
            console.log(error.message)
            dispatch({ type: types.SIGN_OUT_FAILED });
        }
    }
}