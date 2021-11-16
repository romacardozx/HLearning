import axios from 'axios';


export default async function login(payload){
    
    const response = await axios.post("/auth/login", payload);
    return response;

}