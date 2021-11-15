import * as types from "../actions/constants";

const initialState = {
  userDetail: {},
  isAuthenticated: !!window.localStorage.getItem("user"),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_SIGN_UP:
        return {
          ...state
        }
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
    case types.USER_AUTH_REQUEST:
        return {
          ...state
        }
    case types.USER_AUTH_SUCCESS:
        return {
          ...state,
          userDetail: action.payload
        }
        case types.USER_AUTH_FAILED:
          return {
            ...state,
            userDetail: {}
          }
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
