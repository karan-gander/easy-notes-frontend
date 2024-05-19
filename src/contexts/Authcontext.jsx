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
  useEffect(()=>{
    (
      async()=>{
        setLoading(true)
        console.log("js accessToken",accessToken)
      if (accessToken!==undefined){
        const getUser = await usePostApi("post","/api/v1/user/currunt-user")
        console.log("get user",getUser)
        setUser(getUser.data.data)
        console.log("insideaccess to nav")
        // return 
        navigate("/my-profile")
        setLoading(false)
        
      }
      else{
        setLoading(false)
        navigate("/signin")
      }
      
      }
    )()
    

  },[])


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
