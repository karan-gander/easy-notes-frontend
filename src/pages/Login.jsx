/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import mainPhoto from "/main.mp4";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { usePostApi } from "../controllers/usePostApi";
import { useAuth } from "../contexts/Authcontext";
import { useEffect, useState } from "react";
import LoadingButton from "../components/Loadding";
// import Cookies from "js-cookie";run

const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email field is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "min length should be 6"),
});

const Login = () => {
  // const { setAccessToken, setRefeshToken } = useAuth();
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const  {isLogin}  = useAuth();
  useEffect(()=>{
    if(isLogin){
      navigate("/my-profile")
    }
  },[isLogin])
  // console.warn("kkk log",isLogin);
  
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  // console.log(errors)

  const onLogin = async (data) => {
    setLoading(true)
    const response = await usePostApi("post", "https://easy-notes-backend.onrender.com/api/v1/user/login", data);
    
    console.log(response);
    const { status } = response;
    // console.log(response.data.data);
    if (status !== 200) {
      toast.error(response.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      setLoading(false)
    } else {
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setLoading(false)

      // Cookies.set("accessToken",response.data.data.accessToken)
      // console.log(response.data.data.accessToken)

      setTimeout(() => {
        navigate("/my-profile");
      }, 2000);
    }
  };

  return (
    <>

    {loading?<LoadingButton/>:(<>      <ToastContainer position="top-center" />
      <div className="font-popins w-full flex flex-col h-full">
        <Navbar isLogin={isLogin} />
        <div className="bg-primary w-full h-full flex flex-col items-center justify-around px-3 py-5 md:flex-row">
          <div className="h-96 w-fit flex items-center justify-center">
            <video
              src={mainPhoto}
              loop
              autoPlay
              muted
              className="h-full w-[80%] md:w-[90%] min-w-[300px] "
            ></video>
          </div>
          <div className="bg-white w-fit h-96 flex flex-col  space-y-5 items-center p-10 rounded-md">
            <h2 className="text-xl font-medium leading-tight text-black sm:text-xl">
              Log In Your Account
            </h2>

            <form
              action=""
              className="space-y-5 w-fit h-full'"
              onSubmit={handleSubmit(onLogin)}
            >
              <div>
                <TextInput
                  placeholder="Enter Your Email Address"
                  {...register("email")}
                />
                <span className="text-red-500 pt-5">
                  {errors.email && errors.email.message}
                </span>
              </div>

              <div>
                <TextInput placeholder="Password" {...register("password")} type="password" />
                <span className="text-red-500">
                  {errors.password && errors.password.message}
                </span>
              </div>
              <Button customClass="bg-[#4f028f] text-white  hover:bg-[#4f028f]/90">
                Log In
              </Button>
            </form>
            <p className="mt-2 text-base text-gray-600">
              Dont&apos; have a Account? {" "}
              <Link to="/signup" className="text-black">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div></>)}
    </>
  );
};

export default Login;
