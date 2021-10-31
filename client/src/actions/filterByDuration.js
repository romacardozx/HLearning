import axios from 'axios';

require('dotenv').config();
const { BASE_URL } = process.env

function filterByDuration(category){

    return async function(dispatch){
        try {
            var json = await axios(' ');
            return dispatch({
                type: "FILTER_BY_DURATION",
                payload: json.data
            })
            
        } catch (error) {
            console.log("error", error)
        }
    }
}

export default filterByDuration;