/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate} from "react-router-dom";
import {  usePostApi } from "../controllers/usePostApi";
// import { set } from "react-hook-form";
import LoadingButton from "../components/Loadding";

const cookie = new Cookies()

const authContext = createContext();

const Authprovider = function ({ children }) {
  const [user, setUser] = useState({fullName:"loading",email:"loading"});
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const accessToken = cookie.get("accessToken")
  // const refreshToken = Cookies.get("refreshToken")
  console.log("out acess uni",)
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      if (accessToken) {
        try {
          const getUser = await usePostApi("post", "/api/v1/user/currunt-user", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setUser(getUser.data.data);
          navigate("/my-profile");
        } catch (error) {
          console.error("Failed to fetch user", error);
          navigate("/signin");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        navigate("/signin");
      }
    };

    fetchUser();
  }, [accessToken, navigate]);

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
        setLoading
        
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
