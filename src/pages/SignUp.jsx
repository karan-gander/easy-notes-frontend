/* eslint-disable react-hooks/rules-of-hooks */
// import React from 'react'
import Navbar from "../components/Navbar";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup"
import mainPhoto from "/main.mp4";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { usePostApi } from "../controllers/usePostApi";
import { useNavigate } from "react-router-dom";


const signUpSchema = yup.object({
  email: yup.string().required("Email field is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'),
  fullName: yup.string().required("Fullname is required"),
  password: yup.string().required("Password is required").min(8, "min length should be 8")
})




const SignUp = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema)
  })
  console.log(errors, "err")

  const onsubmit = async (data) => {
    console.log(data, "data")
    const response = await usePostApi("post", "http://localhost:10000/api/v1/user/register", data)
    console.log(response)

    const { status, message } = response

    if (status !== 201) {
      // toast(message)
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



    }
    else {
      // toast(response.response.data.message) 
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


      setTimeout(() => {
        navigate("/signin")
      }, 2100);
    }

  }




  return (
    <div className="font-popins w-full flex flex-col h-full">
      <ToastContainer position="top-center" />
      <Navbar />
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
        <div className="bg-white w-fit min-h-96 flex flex-col  space-y-5 items-center p-10 rounded-md">
          <h2 className="text-xl font-medium leading-tight text-black sm:text-xl">Create a account</h2>
          <p className="mt-2 text-base text-gray-600">
            Already have an account?{' '}

            <Link to="/signin" className="text-black" >Sign In</Link>

          </p>
          <form action="" className="space-y-5 w-fit h-full'" onSubmit={handleSubmit(onsubmit)}>
            <div>
              <TextInput placeholder="Enter Your Email Address" {...register("email")} />
              <span className="text-red-500">{errors.email && errors.email.message}</span>
            </div>
            <div>
              <TextInput placeholder="Full Name" {...register("fullName")} />
              <span className="text-red-500">{errors.fullName && errors.fullName.message}</span>
            </div>
            <div>
              <TextInput placeholder="Password" type="password" {...register("password")} />
              <span className="text-red-500">{errors.password && errors.password.message}</span>
            </div>
            <Button customClass="bg-[#4f028f] text-white  hover:bg-[#4f028f]/90">Create Account</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
