const axios = require("axios");

require('dotenv').config();
const {  } = process.env

export function getCourseByName(name){
    
    return async function(dispatch){
        try {
            var json = await axios(`/?name=${name?name:""}`);
            return dispatch({
                type: "GET_COURSE_BY_NAME",
                payload: json.data
            })
            
        } catch (error) {
           console.log("error", error)
        }
    }
  };

