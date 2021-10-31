import axios from 'axios';

require('dotenv').config();
const { BASE_URL } = process.env

function filterByCategory(category){

    return async function(dispatch){
        try {
            var json = await axios(`${BASE_URL}/?category=${category?category:""}`);
            return dispatch({
                type: "FILTER_BY_CATEGORIES",
                payload: json.data
            })
            
        } catch (error) {
            console.log("error", error)
        }
    }
}

export default filterByCategory;