const axios = require('axios')

export function getAllCourses(){
    return async function(dispatch){
        try {
            var json = await axios(' ');
            return dispatch({
                type: "GET_ALL_COURSES",
                payload: json.data
            })
            
        } catch (error) {
            console.log("error", error)
        }
    }
}
