const axios = require('axios')

require('dotenv').config();
const { BASE_URL } = process.env

export function getDetailCourses(id){
    return async function(dispatch){
        try {
            var json = await axios(' + id');
            return dispatch({
                type: "GET_DETAIL_COURSES",
                payload: json.data
            })
            
        } catch (error) {
            console.log("error", error)
        }
    }
}


// ACTION
// export function getDetail(id) {
//     return async function(dispatch) {
//         try {
//             var json = await axios.get("http://localhost:3001/courses/" + id);
//             return dispatch({
//                 type: 'GET_DETAILS',
//                 payload: json.data
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }