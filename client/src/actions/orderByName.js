import axios from 'axios';



export function orderByName(name){
    
    return async function(dispatch){
        try {
            let json = await axios(`/courses?name=${name?name:""}`)
            
            return dispatch({

                type: 'ORDER_BY_NAME',
                payload: json.data

            })
            
        } catch(error){
            console.log("error order by name", error)
        }
    }
}