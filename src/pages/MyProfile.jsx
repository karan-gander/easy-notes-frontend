/* eslint-disable react-hooks/rules-of-hooks */
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useAuth } from "../contexts/Authcontext";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, } from "lucide-react";
import dashboardmainImg from "/dashmain.svg";
import oldPaperIcon from "/paper.png"
import notesIcon from "/notebook.png"
import { ToastContainer, toast, Bounce } from "react-toastify";
import { usePostApi } from "../controllers/usePostApi";

export const MyProfile = () => {
  // const { user,isLogin } = useAuth();
  const navigate = useNavigate()
  // console.log(user, "use");
  const handleLogout = async () => {
    console.log("hii ")
    const response = await usePostApi("post", "http://localhost:10000/api/v1/user/logout")
    //  console.log(reslog)
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

      // Cookies.set("accessToken",response.data.data.accessToken)
      // console.log(response.data.data.accessToken)

      setTimeout(() => {
        navigate("/signin");
      }, 2000);

    }

  }
  return (
    <>
      <ToastContainer position="top-center" />
      {/* <Navbar isLogin={isLogin}/> */}
      <Navbar />
      <div className="bg-primary w-full h-full flex justify-center items-center p-5 ">
        <div className="white-box rounded-md bg-white w-1/2 flex flex-col md:flex-row justify-around items-center px-10 overflow-auto flex-grow basis-1/2">


          <div className="flex flex-col w-full md:w-1/2 items-center justify-center space-y-5 p-[5%]">
            <h2 className="text-primary text-2xl font-popins">Easy Notes – Fueling Student Success at GPC Jodhpur</h2>
            <h4 className="text-white font-popins">Download Notes</h4>
            <img
              src={dashboardmainImg}
              className="w-full p-10 aspect-square max-w-lg min-w-72 shadow-xl"
              alt=""
            />
          </div>
          <div className=" w-full md:w-1/2  p-[5%] flex justify-around flex-wrap">
            <Link to='/notes'>
              <div className=" m-2 w-60 h-40 flex flex-col items-center justify-around bg-gray-300 shadow-lg rounded-md">
                <img src={notesIcon} alt="" className="w-20" />
                <h3>Notes</h3>
              </div></Link>
            <Link to='/old-papers'>
              <div className=" m-2 w-60 h-40 flex flex-col items-center justify-around bg-gray-300 shadow-lg  rounded-md">
                <img src={oldPaperIcon} alt="" className="w-20" />
                <h3>Old Paper</h3>
              </div></Link>
           
          </div>

        </div>
      </div>
    </>
  );
};

export default MyProfile;
