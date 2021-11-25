import axios from "axios";

export function deleteCourse(id) {
  return async function () {
    try {
      const json = await axios.post(`/courses/delete/${id}`); 
      return json;
    } catch (error) {
      console.log("deleteActivity", error);
    }
  };
}
