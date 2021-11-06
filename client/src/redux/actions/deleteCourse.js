import axios from "axios";

export function deleteCourse(id) {
  return async function () {
    try {
      const json = await axios.delete(`/courses` + id); //acordate que va (link, id)
      return json;
    } catch (error) {
      console.log("deleteActivity", error);
    }
  };
}
