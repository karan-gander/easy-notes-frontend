/* eslint-disable react-hooks/rules-of-hooks */
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useAuth } from "../contexts/Authcontext";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import userImg from "/user.jpg";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { usePostApi } from "../controllers/usePostApi";

export const MyProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate()
  console.log(user, "use");
  const handleLogout = async()=>{
    console.log("hii ")
   const response =  await usePostApi("post", "/api/v1/user/logout")
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
      <Navbar />
      <div className="bg-primary h-full w-full flex items-center justify-center">
        <div className=" bg-white flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 ">
        <LogOut className="cursor-pointer" onClick={handleLogout}/>
          <img
            src={userImg}
            alt=""
            className="w-32 h-32 mx-auto rounded-full  aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">{user.fullName}</h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
               {user.email}
              </p>
            </div>
			
			<Button customClass={"bg-black text-white px-10 mx-5"}><Link to="/notes">Download Notes</Link></Button>
			<Button customClass={"bg-black text-white px-10 mx-5"}><Link to="/old-papers"> Download Old Papers</Link></Button>
			
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
