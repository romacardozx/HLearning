        // import axios from 'axios';

        // export function setNewAdmin(id) {
        //     return async function (dispatch) {
        //     try {
        //         const token = JSON.parse(window.localStorage.getItem("user"));
        //         if (token) {
        //         const { data, request } = await axios.post(`/auth/setAdmin`, {
        //             token,
        //             idUser: id,
        //         });
        //         if (request.status === 200) {
        //             dispatch({
        //             type: types.ADMIN_CHANGE_STATUS_SUCCESS,
        //             payload: data.isAdmin,
        //             });
        //             Swal.fire("Saved!", "", "success");
        //         }
        //         } else {
        //         dispatch({ type: types.ADMIN_CHANGE_STATUS_FAILED });
        //         window.location.href = "/";
        //         Swal.fire("Something went wrong!", "", "error");
        //         }
        //     } catch (e) {
        //         console.log(e);
        //         dispatch({ type: types.ADMIN_CHANGE_STATUS_FAILED });
        //     }
        //     };
        // }
  