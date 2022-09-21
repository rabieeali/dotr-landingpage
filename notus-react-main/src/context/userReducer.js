import { USER_LOGIN, SAVE_TICKET } from "./actionTypes";

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return { ...state, user: action.payload };
    }
    case SAVE_TICKET: {
      return { ...state, ticket: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
