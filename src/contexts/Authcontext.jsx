/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate} from "react-router-dom";
import {  usePostApi } from "../controllers/usePostApi";
import { useLocation } from "react-router-dom";
// import { set } from "react-hook-form";
import LoadingButton from "../components/Loadding";
import { LogIn } from "lucide-react";

const cookie = new Cookies()

const authContext = createContext();

const Authprovider = function ({ children }) {
  const curruntRoute = useLocation()
  // console.error("my current location",loc)
  const [user, setUser] = useState({fullName:"loading",email:"loading"});
  const [isLogin,setIslogin] = useState(false)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
    
  // const accessToken = Cookies.get("accessToken")
  
  // console.log("out acess uni",)

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      if (true) {
        try {
          const getUser = await usePostApi("post", "http://localhost:10000/api/v1/user/currunt-user", {
            // headers: {
            //   Authorization: `Bearer ${accessToken}`,
            // },
          });
          setUser(getUser.data.data);
          setIslogin(true)
          navigate(curruntRoute.pathname);
        } catch (error) {
          console.error("Failed to fetch user", error);
          setIslogin(false)
          navigate("/signin");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        setIslogin(false)
        navigate("/signin");
      }
    };                                
    // 506DPFLF998901

    fetchUser();
  }, []);



  
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      if (true) {
        try {
          const getUser = await usePostApi("post", "http://localhost:10000/api/v1/user/currunt-user", {
            // headers: {
            //   Authorization: `Bearer ${accessToken}`,
            // },
          });
          setUser(getUser.data.data);
          setIslogin(true)
          navigate(curruntRoute.pathname);
        } catch (error) {
          console.error("Failed to fetch user", error);
          setIslogin(false)
          navigate("/signin");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        setIslogin(false)
        navigate("/signin");
      }
    };                                
    // 506DPFLF998901

    fetchUser();
  }, [ navigate]);

  useEffect(() => {
    const handleTokenChange = () => {
      const newAccessToken = cookie.get("accessToken");
      if (!newAccessToken) {
        navigate("/signin");
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
        user,
        setUser,
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

const useAuth = () => useContext(authContext);

export { Authprovider, useAuth };
