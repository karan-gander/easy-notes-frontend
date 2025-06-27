/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate} from "react-router-dom";

import { useLocation } from "react-router-dom";
// import { set } from "react-hook-form";
import LoadingButton from "../components/Loadding";


const cookie = new Cookies()

const authContext = createContext();

const AdminAuthprovider = function ({ children }) {
  const curruntRoute = useLocation()
  // console.error("my current location",loc)
  const [isLogin,setIslogin] = useState(false)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const accessToken = cookie.get("adminAccessToken")

  
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      if (accessToken) {
        
          
          
        navigate(curruntRoute.pathname);
        setLoading(false)
        
      } else {
        setLoading(false);
        setIslogin(false)
        navigate("/admin-signin");
      }
    };

    fetchUser();
  }, [accessToken, navigate]);

  useEffect(() => {
    const handleTokenChange = () => {
      const newAccessToken = cookie.get("accessToken");
      if (!newAccessToken) {
        navigate("/admin-signin");
      }
    };

    
    cookie.addChangeListener(handleTokenChange);
    
    // Cleanup function
    return () => {
      cookie.removeChangeListener(handleTokenChange);
    };
  }, [navigate]);


  return (
    <authContext.Provider
      value={{
       
        loading,
        setLoading,
        isLogin
        
      }}
    >
    {loading ? (
        <LoadingButton/>
      ) : (
        children
      )}    
    </authContext.Provider>
  );
};

const useadminAuth = () => useContext(authContext);

export { AdminAuthprovider, useadminAuth };
