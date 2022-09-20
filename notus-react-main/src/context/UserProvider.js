import { createContext, useContext, useReducer } from "react";
import userReducer from "./userReducer";

const UserContext = createContext();
const UserContextDispatcher = createContext();

const initialState = {
user:{}
};

const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={user}>
      <UserContextDispatcher.Provider value={dispatch}>
        {children}
      </UserContextDispatcher.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;

// hooks!

export const useAuth = () => useContext(UserContext);
export const useAuthActions = () => useContext(UserContextDispatcher);
