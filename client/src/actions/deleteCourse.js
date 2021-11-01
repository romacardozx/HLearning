import axios from 'axios';

require('dotenv').config();
const { REACT_APP_BASE_URL } = process.env

export function deleteCurse(id){
    
    return async function(){
        try {
            const json = await axios.delete(`http://${REACT_APP_BASE_URL}/courses` + id) //acordate que va (link, id)
            return json;
        } catch (error) {
            console.log("deleteActivity", error)
        }
    } 
}