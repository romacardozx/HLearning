import axios from "axios";

export function deleteCourse(id) {
  return async function () {
    console.log(id)
    try {
      const json = await axios.post(`/courses/delete/${id}`); //acordate que va (link, id)
      return json;
    } catch (error) {
      console.log("deleteActivity", error);
    }
  };
}
