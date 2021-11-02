import axios from 'axios';

require('dotenv').config();
const { REACT_APP_BASE_URL } = process.env

export function filterRangeByPrice(priceToFilter){
    
    return async function(dispatch){
        try {
            let json = await axios(`http://${REACT_APP_BASE_URL}/courses?priceToFilter=${priceToFilter?priceToFilter:""}`)
            return dispatch({
                type: 'FILTER_BY_RANGE_PRICE',
                payload: json.data
            })
            
        } catch(error){
            console.log("error order price", error)
        }
    }
}