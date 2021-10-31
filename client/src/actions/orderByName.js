import axios from 'axios';

require('dotenv').config();
const { BASE_URL } = process.env


export function orderByName(name){
    
    return async function(dispatch){
        try {
            let json = await axios(`${BASE_URL}/courses?name=${name?name:""}`)
            
            return dispatch({

                type: 'ORDER_BY_NAME',
                payload: json.data

            })
            
        } catch(error){
            console.log("error order by name", error)
        }
    }
}