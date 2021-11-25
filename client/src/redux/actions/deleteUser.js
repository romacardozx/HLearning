import axios from "axios";

export function deleteUser(id) {
  return async function () {
    try {
      const json = await axios.post(`/users/delete/${id}`); 
      return json;
    } catch (error) {
      console.log("deleteActivity", error);
    }
  };
}
