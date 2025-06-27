/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "../../components/Navbar";
import adminImg from "/admin.svg";
import Select from "../../components/Select";
import { Upload } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, Bounce, ToastContainer } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { usePostFileApi } from "../../controllers/usePostFile";
import { useState } from "react";
import UploadingButton from "../../components/Uploading";
import { Link } from "react-router-dom";
// import axios from "axios";
const notesSchema = yup.object({
  branch: yup.string().required("Please Select Your Branch"),
  // year:yup.string().required("Please Select Your year"),
  semester: yup.string().required("Please Select Your semester"),
  medium: yup.string().required("Please Select Your medium"),
  notes: yup.string().required("Please Notes pdf"),
});

const Notesupload = () => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("");
  console.log("selseclsl", selectedBranch);
  console.log("before change ");
  const handleBranchChange = (value) => {
    console.log("my eeeeee", value);
    setSelectedBranch(value);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(notesSchema),
  });
  console.log(errors);
  const uploadNotes = async (data, e) => {
    e.preventDefault();

    const Data = { ...data, notes: e.target.elements.notes.files[0] };
    setLoading(true);
    const response = await usePostFileApi("https://easy-notes-backend.onrender.com/api/v1/admin/upload-notes", Data);

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
      setLoading(false);
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

    console.log("upload res", response);

    reset();
  };

  console.error("error obj", errors);

  if (loading) {
    return <UploadingButton />;
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

  const values = {
    "":"",
    FI:[
      " ",
      "Firstsem", "Secondsem",
    ],
    CE:[
      " ",
      "Thirdsem", "Fourthsem", "Fivesem", "Sixsem"
    ],
    ME:[
      " ",
      "Thirdsem", "Fourthsem", "Fivesem", "Sixsem"
    ],
    EL:[
      " ",
      "Thirdsem", "Fourthsem", "Fivesem", "Sixsem"
    ],
    ELC:[
      " ",
      "Thirdsem", "Fourthsem", "Fivesem", "Sixsem"
    ],
    CS:[
      " ",
      "Thirdsem", "Fourthsem", "Fivesem", "Sixsem"
    ],
  }

  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" />
      <div className="bg-primary w-full h-full flex flex-col md:flex-row justify-around items-center px-10 overflow-auto flex-grow basis-1/2">
        <div className="fflex flex-col w-full md:w-1/2 items-center justify-center space-y-5 p-[5%]">
          <h2 className="text-white text-2xl font-popins">Upload Notes</h2>

          <img src={adminImg} className="size-80" alt="" />
        </div>
        <form
          className="w-full h-fit bg-primary"
          encType="multipart/form-data"
          onSubmit={handleSubmit(uploadNotes)}
        >
          <div className="text-center">
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
            <span className="text-white">
              {errors.branch && errors.branch.message}
            </span>
          </div>

          <div className="text-center">
            <Select
              label="Semester"
              options={semesterOptions[`${selectedBranch}`]}
              {...register("semester")}
              selectedBranch={handleBranchChange}
              // values={["","Thirdsem", "Fourthsem", "Fivesem", "Sixsem"]}
              values={values[`${selectedBranch}`]}
            />
            <span className="text-white">
              {errors.semester && errors.semester.message}
            </span>
          </div>
          <div className="text-center">
            <Select
              label="Medium"
              {...register("medium")}
              options={["Select Your Medium", "English", "Hindi"]}
              values={["", "English", "Hindi"]}
            />{" "}
            <span className="text-white">
              {errors.medium && errors.medium.message}
            </span>
          </div>
          <div>
            <input
              type="file"
              {...register("notes")}
              id=""
              className="text-white m-5 p-5  cursor-pointer"
            />
            <span className="text-white">
              {errors.notes && errors.notes.message}
            </span>
          </div>
          <button
            type="submit"
            className="bg-[rgba(0,0,0,0.51)] flex items-center  text-white w-40 mx-auto  px-2 py-3 rounded-tl-2xl rounded-br-2xl hover:rounded-2xl my-5 transition-all"
          >
            <Upload className="px-2 size-8" /> Upload
          </button>
          
           <Link to="/admin-dashboard" className="bg-[rgba(0,0,0,0.51)] flex items-center justify-center  text-white w-40 mx-auto  px-2 py-3 text-center rounded-2xl my-5 transition-all"> Go Back</Link>
         
          
        </form>
      </div>
    </>
  );
};

export default Notesupload;
