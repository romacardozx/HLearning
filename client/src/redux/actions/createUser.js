import axios from 'axios';


export default async function postNewUser(payload){
    
    const response = await axios.post("/users/createUser", payload);
    return response;

}