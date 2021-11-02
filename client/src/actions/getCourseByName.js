const axios = require("axios");

require('dotenv').config();
const { REACT_APP_BASE_URL } = process.env

export function getCourseByName(name){
    
    return async function(dispatch){
        try {
            var json = await axios(`http://${REACT_APP_BASE_URL}/courses/search?name=${name?name:""}`);
            return dispatch({
                type: "GET_COURSE_BY_NAME",
                payload: json.data
            })
            
        } catch (error) {
           console.log("error", error)
        }
    }
  };
