import axios from 'axios';


export function filterRangeByPrice(priceToFilter){
    
    return async function(dispatch){
        try {
            let json = await axios(`/courses?priceToFilter=${priceToFilter?priceToFilter:""}`)
            return dispatch({
                type: 'FILTER_BY_RANGE_PRICE',
                payload: json.data
            })
            
        } catch(error){
            console.log("error order price", error)
        }
    }
}