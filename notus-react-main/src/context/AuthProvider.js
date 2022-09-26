import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  console.log('AuthProvider0');
  const [auth, setAuth] = useState({});
  console.log('AuthProvider1', auth);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
