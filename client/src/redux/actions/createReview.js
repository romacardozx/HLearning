import axios from 'axios';


export default async function postNewRecipe(payload){
    
    const response = await axios.post("/reviews/createReview", payload);
    return response;

}