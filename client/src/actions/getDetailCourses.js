// const axios = require('axios')
import axios from 'axios';

require('dotenv').config();
const { BASE_URL } = process.env

export function getDetailCourses(id){
    
    return async function(dispatch){
        try {
            // var json = await axios(`${BASE_URL}/courses` + id);
            var json = await axios(`http://localhost:8000/courses/${id}`);
            return dispatch({
                type: "GET_DETAIL_COURSES",
                payload: json.data
            });
        } catch (error) {
            console.log("error", error)
        }
    }
}
