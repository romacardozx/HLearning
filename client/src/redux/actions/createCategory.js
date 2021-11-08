import axios from 'axios';


export function createCategory(payload){
    return async function(dispatch){
        const response = await axios.post('/createCategory', payload);
        return response;
    }
}