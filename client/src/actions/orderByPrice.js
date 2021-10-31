import axios from 'axios';

require('dotenv').config();
const { BASE_URL } = process.env

export function orderByPrice(price){
    
    return async function(dispatch){
        try {
            let json = await axios(`${BASE_URL}/courses?price=${price?price:""}`)
            return dispatch({
                type: 'ORDER_BY_PRICE',
                payload: json.data
            })
            
        } catch(error){
            console.log("error order price", error)
        }
    }
}