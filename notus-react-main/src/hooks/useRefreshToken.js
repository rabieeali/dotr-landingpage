import axios from '../api/axios';
import useAuth from './useAuth';
const REFRESH_URL = '../../api/refresh';

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    //console.log("refresh token call");
    const refresh = async () => {
        const response = await axios.get(REFRESH_URL, {
            withCredentials: true
        });
        const jResponse = JSON.parse(response?.data);

        //console.log(JSON.parse(response?.data));
        //console.log('refresh items>>', jResponse);
     
        setAuth(prev => {
            //console.log(JSON.stringify(prev));
            //console.log(response.data.accessToken);
            return {
                ...prev,
                roles : jResponse?.Roles.replace('[','').replace(']','').split(','),
                forms : jResponse?.Forms.replace('[','').replace(']','').split(','),
                userId : jResponse?.UserId,
                accessToken :jResponse?.AccessToken,
                name : jResponse?.Name,
                family : jResponse?.Family,
                fullName :jResponse?.FullName,

 
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;
