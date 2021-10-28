const axios = require('axios')

export function getAllCategory(){
    return async function(dispatch){
        try {
            var json = await axios(' ');
            return dispatch({
                type: "GET_ALL_CATEGORIES",
                payload: json.data
            })
            
        } catch (error) {
            console.log("error", error)
        }
    }
}
