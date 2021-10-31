import axios from 'axios';

require('dotenv').config();
const { BASE_URL } = process.env

export function orderByScore(score){
    
    return async function(dispatch){
        try {
            let json = await axios(`${BASE_URL}/courses?score=${score?score:""}`)
            return dispatch({
                type: 'ORDER_BY_SCORE',
                payload: json.data
            })
            
        } catch(error){
            console.log("error order score", error)
        }
    }
}