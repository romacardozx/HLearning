import * as types from "../actions/constants";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_USER:
      return {
        ...state,
      };
    case types.POST_SIGN_IN:
      return {
        ...state,
      };
    case types.SIGN_OUT_SUCCESS:
        return {
            ...state
        }
    case types.SIGN_OUT_FAILED:
        return {
            ...state
        }
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
