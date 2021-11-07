import axios from "axios";


export function getUserById(id){
    
    return async function(dispatch){
        try {
            var json = await axios(`/users/${id}`);
            return dispatch({
                type: "GET_USER",
                payload: json.data
            });
        } catch (error) {
            console.log("error", error)
        }
    }
  };

