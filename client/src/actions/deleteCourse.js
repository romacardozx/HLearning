import axios from "axios";

export function deleteCurse(id) {
  return async function () {
    try {
      const json = await axios.delete(`http://courses` + id); //acordate que va (link, id)
      return json;
    } catch (error) {
      console.log("deleteActivity", error);
    }
  };
}
