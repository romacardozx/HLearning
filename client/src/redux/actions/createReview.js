import axios from 'axios';


export default async function postNewReview(payload){
    
    const response = await axios.post("/reviews/createReview", payload);
    return response;

}