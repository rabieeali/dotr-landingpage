import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
  const { auth } = useContext(AuthContext);

  console.log("auth",auth)
  useDebugValue(auth, (auth) => (auth?.userId ? "Logged In" : "Logged Out"));

  return useContext(AuthContext);
};

export default useAuth;
