import axios from "axios";

export function getAllUsers() {
  return async function (dispatch) {
    try {
      var json = await axios(`/users`);
      return dispatch({
        type: "GET_ALL_USERS",
        payload: json.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
}