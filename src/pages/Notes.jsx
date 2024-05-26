/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "../components/Navbar";
import Select from "../components/Select";
import takingnotes from "/kk.svg";
import { Search } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, Bounce, ToastContainer } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { usePostApi } from "../controllers/usePostApi";
import { useState } from "react";
import pdfIcon from "/pdf.png";
import LoadingButton from "../components/Loadding";
// import { data } from "autoprefixer";
// import { CgFontSpacing } from "react-icons/cg";
const notesSchema = yup.object({
  branch: yup.string().required("Please Select Your Branch"),
  // year:yup.string().required("Please Select Your year"),
  semester: yup.string().required("Please Select Your semester"),
  medium: yup.string().required("Please Select Your medium"),
  // notes: yup.string().required("Please Notes pdf"),
});

const Notes = () => {
  const [loading, setLoading] = useState(false);

  const [selectedBranch, setSelectedBranch] = useState("");
  console.log("selseclsl", selectedBranch);
  console.log("before change ");
  const handleBranchChange = (value) => {
    console.log("my eeeeee", value);
    setSelectedBranch(value);
  };

  console.log("after change");
  const [response, setResponse] = useState({
    data: {
      data: {
        success: false,
      },
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(notesSchema),
  });
  console.log(errors);

  const downloadNotes = async (data) => {
    setLoading(true);
    const response = await usePostApi(
      "post",
      "/api/v1/user/notes-download",
      data
    );
    console.log("data", data);

    

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

      setLoading(false);
      // Cookies.set("accessToken",response.data.data.accessToken)
      // console.log(response.data.data.accessToken)
    }

    setResponse(response);

    reset();
  };
  // console.log("response is here ", response);

  if (loading) {
    return <LoadingButton />;
  }

  if (response.status === 200) {
    return (
      <div>
        <ToastContainer position="top-center" />
        <Navbar />
        {response.data.data.notes.length <= 0 ? (
          <main className="flex-grow p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              Notes are not availble for this branch we will upload soon
            </div>
          </main>
        ) : (
          <main className="flex-grow p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {response.data.data.notes.map((pdfFile, i) => (
                <a
                  key={i}
                  className="bg-gray-200 p-4"
                  href={pdfFile.url}
                  target="_blank"
                >
                  <img src={pdfIcon} className="size-20" alt="" />
                  <p className="text-md p-4 font-popins">{pdfFile.fileName}</p>
                </a>
              ))}
            </div>
          </main>
        )}
       
      </div>
    );
  }

  const semesterOptions = {
    "": ["Please Select Your Branch"],
    FI: ["Select Your Semester", "First Semester", "Second Semester"],
    CE: [
      "Select Your Semester",
      "Third Semester",
      "Fourth Semester",
      "Five Semester",
      "Six Semester",
      
    ],
    ME: [
      "Select Your Semester",
      "Third Semester",
      "Fourth Semester",
      "Five Semester",
      "Six Semester",
      
    ],
    EL: [
      "Select Your Semester",
      "Third Semester",
      "Fourth Semester",
      "Five Semester",
      "Six Semester",
      
    ],
    ELC: [
      "Select Your Semester",
      "Third Semester",
      "Fourth Semester",
      "Five Semester",
      "Six Semester",
      
    ],
    CS: [
      "Select Your Semester",
      "Third Semester",
      "Fourth Semester",
      "Five Semester",
      "Six Semester",
      
    ],
   
  };
 
  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" />
      <div className="bg-primary w-full h-full flex flex-col md:flex-row justify-around items-center px-10 overflow-auto flex-grow basis-1/2">
        <div className="flex flex-col w-full md:w-1/2 items-center justify-center space-y-5 p-[5%]">
          <h2 className="text-white text-2xl font-popins">Welcome Back!</h2>
          <h4 className="text-white font-popins">Download Notes</h4>
          <img
            src={takingnotes}
            className="w-full p-10 aspect-square max-w-lg min-w-72"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2  p-[5%]">
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(downloadNotes)}
          >
            <Select
              label="Branch"
              options={[
                "Select Your Branch",
                "Common First Year Branch",
                "Civil",
                "Mechanical",
                "Electrical",
                "Electronics",
                "Computer Science",
              ]}
              SelectedBranch={handleBranchChange}
              {...register("branch")}
              values={["", "FI", "CE", "ME", "EL", "ELC", "CS"]}
            />

            <Select
              label="Semester"
              options={semesterOptions[`${selectedBranch}`]}
             
              {...register("semester")}
              values={["", "Thirdsem", "Fourthsem", "Fivesem","Sixsem"]}
            />
            <Select
              label="Medium"
              {...register("medium")}
              options={["Select Your Medium", "English", "Hindi"]}
              values={["", "English", "Hindi"]}
            />

            <button className="bg-[rgba(0,0,0,0.51)] flex justify-center items-center text-white w-full  px-10 py-3 rounded-tl-2xl rounded-br-2xl hover:rounded-2xl my-5 transition-all">
              <Search /> Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Notes;
