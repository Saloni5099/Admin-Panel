import { createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [services,setServices] = useState([]);
    const authorizationToken = `Bearer ${token}`;
    const API = "http://localhost:5000";
    const storeTokenInLS = (serverToken)=>{
        setToken(serverToken);        // add it to not refresh after login
        return localStorage.setItem("token",serverToken);
    };
    let isLoggedIn = !!token; 
    const LogoutUser = () => {
        setToken("");
        setUser(null);
        return localStorage.removeItem("token");
    };
    // JWT AUTHENTICATION -to get the currently loggedIN user data
    const userAuthentication = async ()=>{
        if (!token) {
            setIsLoading(false);
            setUser(null);
            return;
        }
        try {
            setIsLoading(true);
            const response = await fetch(`${API}/api/auth/user`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            } else {
                setUser(null);
            }
        } catch (error) {
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }
    // to fetch the services data from the database
    const getServices = async()=>{
        try {
           const response = await fetch(`${API}/api/data/service`,{
            method:"GET",
           });
           if(response.ok){
            const data = await response.json();
            console.log(data.msg);
            setServices(data.msg);
           }
        } catch (error) {
            console.log(`services frontend error:${error}`);
        }
    }
    useEffect(()=>{
        getServices();
        userAuthentication();
    },[token]);
    return (
     <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser,user,services,authorizationToken,API,isLoading}}>
        {children}
     </AuthContext.Provider>
    );
};

export const useAuth = () =>  {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
export default AuthProvider;