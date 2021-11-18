import axios from "axios";

export function deleteUser(id) {
  console.log(id)
  return async function () {
    try {
      const json = await axios.post(`/users/delete/${id}`); 
      // const json = await axios.post('/users/delete/' + id); 
      return json;
    } catch (error) {
      console.log("deleteActivity", error);
    }
  };
}

// export function deleteUser(id) {
//   console.log(id)
//   return async function (dispatch) {
//     try {
//       const  request  = await axios.post(`/users/delete/${id}`);
//       return dispatch({
//         type: "DELETE_USER",
//       })
//     } catch (e) {
//       console.log(e);
//     }
//   };
// }