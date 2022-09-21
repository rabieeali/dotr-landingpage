import { createContext, useContext, useReducer } from "react";
import userReducer from "./userReducer";

const TicketContext = createContext();
const TicketContextDispatcher = createContext();

const initialState = {
//   ticket: {},
};

const TicketProvider = ({ children }) => {
  const [ticket, dispatch] = useReducer(userReducer, initialState);

  return (
    <TicketContext.Provider value={ticket}>
      <TicketContextDispatcher.Provider value={dispatch}>
        {children}
      </TicketContextDispatcher.Provider>
    </TicketContext.Provider>
  );
};

export default TicketProvider;

// hooks!

export const useTicket = () => useContext(TicketContext);
export const useTicketActions = () => useContext(TicketContextDispatcher);
