import axios from "axios";


export function getUserDetail(id){
    
    return async function(dispatch){
        try {
            var json = await axios(`/users/${id}`);
            return dispatch({
                type: "GET_USER_DETAIL",
                payload: json.data
            });
        } catch (error) {
            console.log("error", error)
        }
    }
  };