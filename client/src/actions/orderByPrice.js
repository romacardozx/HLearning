import axios from 'axios';



export function orderByPrice(price){
    
    return async function(dispatch){
        try {
            let json = await axios(`/courses?price=${price?price:""}`)
            return dispatch({
                type: 'ORDER_BY_PRICE',
                payload: json.data
            })
            
        } catch(error){
            console.log("error order price", error)
        }
    }
}