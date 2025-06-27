/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "../../components/Navbar";
import TextInput from "../../components/TextInput";
import adminLoginPhoto from "/adminlogin.svg";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { ToastContainer, toast, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { usePostApi } from "../../controllers/usePostApi";

// import Cookies from "js-cookie";run

const loginSchema = yup.object({
  adminId: yup
    .string()
    .required("AdminID field is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "min length should be 6"),
});

const AdminLogin = () => {
  // const { setAccessToken, setRefeshToken } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  // console.log(errors)

  const onLogin = async (data) => {
    console.log(data);

            const response = await usePostApi("post", "http://localhost:10000 /api/v1/admin/login", data);

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

      

      setTimeout(() => {
        navigate("/admin-dashboard");
      }, 2000);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="font-popins w-full flex flex-col h-full">
        <Navbar />
        <div className="bg-primary w-full h-full flex flex-col items-center justify-around px-3 py-5 md:flex-row">
          <div className="h-96 w-fit flex items-center justify-center">
            <img
              src={adminLoginPhoto}
              className="h-full w-[80%] md:w-[90%] min-w-[300px] "
            />
          </div>
          <div className="bg-white w-fit h-96 flex flex-col  space-y-5 items-center p-10 rounded-md">
            <h2 className="text-xl font-medium leading-tight text-black sm:text-xl">
              Log In Admin Account
            </h2>

            <form
              action=""
              className="space-y-5 w-fit h-full"
              onSubmit={handleSubmit(onLogin)}
            >
              <div>
                <TextInput
                  placeholder="Enter Your Admin ID"
                  {...register("adminId")}
                />
                <span className="text-red-500 pt-5">
                  {errors.adminId && errors.adminId.message}
                </span>
              </div>

              <div>
                <TextInput placeholder="Password" {...register("password")} />
                <span className="text-red-500">
                  {errors.password && errors.password.message}
                </span>
              </div>
              <Button customClass="bg-[#4f028f] text-white  hover:bg-[#4f028f]/90">
                Log In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
