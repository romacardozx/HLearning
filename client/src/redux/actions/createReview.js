import axios from 'axios';


export async function postNewRecipe(payload){
    
    const response = await axios.post("/createReview", payload);
    return response;

}