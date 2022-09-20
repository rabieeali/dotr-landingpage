import { USER_LOGIN, USER_TICKET } from "./userActionTypes";

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return { ...state, user: action.payload };
    }
    case USER_TICKET: {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
