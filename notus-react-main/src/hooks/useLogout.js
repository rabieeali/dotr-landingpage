import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();
 
    const LOGUT_URL = '../../api/auth/Logout';
    
    const logout = async () => {
        
        try {
            const response = await axios(LOGUT_URL, {
                withCredentials: true
            });
            
            setAuth({});
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout