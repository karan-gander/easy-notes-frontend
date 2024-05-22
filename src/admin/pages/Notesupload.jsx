import Navbar from "../../components/Navbar";
import adminImg from "/admin.svg";
import Select from "../../components/Select";
import { Upload } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { usePostFileApi } from "../../controllers/usePostFile";
// import axios from "axios";
const notesSchema = yup.object({
  branch:yup.string().required("Please Select Your Branch"),
  year:yup.string().required("Please Select Your year"),
  semseter:yup.string().required("Please Select Your semeter"),
  medium:yup.string().required("Please Select Your medium"),
  notes:yup.string().required("Please Notes pdf")
});

const Notesupload = () => {
  // const navigate = useNavigate();


  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(notesSchema),
  });
console.log(errors)
const uploadNotes = async(data,e)=>{
    e.preventDefault();
    console.log("event ",e.target.elements.notes.files[0])
    console.log('upload',data.notes)
    const Data  = {...data,notes:e.target.elements.notes.files[0]}
    console.log("new Data",Data)
   const response = await  usePostFileApi("/api/v1/admin/upload-notes",Data)
  
   console.log('upload res',response)
  
  reset()

}


  return (
    <>
      <Navbar />
      <div className="bg-primary w-full h-full flex flex-wrap justify-around items-center px-10 overflow-auto">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h2 className="text-white text-2xl font-popins">Upload Notes</h2>

          <img src={adminImg} className="size-80" alt="" />
        </div>
        <form className="" encType="multipart/form-data"  onSubmit={handleSubmit(uploadNotes)}>
          <Select
            label="Branch"
            {...register("branch")}
            options={[
              "Select Your Branch",
              "Civil",
              "Mechanical",
              "Electrical",
              "Electronics",
              "Computer Science",
            ]}
            values={["CE", "ME", "EL", "ELC", "CS"]}
          />
          {/* <Select
            label="Year"
            {...register("year")}
            options={[
              "Select Your Year",
              "First Year",
              "Second Year",
              "Third Year",
            ]}
            values={["First", "Second", "Third"]}
          /> */}
          <Select
            label="Semester"
            {...register("semseter")}
            options={[
              "Select Your Semester",
              "First Semester",
              "Second Semester",
              "Third Semester",
              "Fourth Semester",
              "Five Semester",
              "Six Semester",
            ]}
            values={["Firstsem", "Secondsem", "Thirdsem", "Fourthsem", "Fivesem"]}
          />
          <Select
            label="Medium"
            {...register("medium")}
            options={["Select Your Medium", "English", "Hindi"]}
            values={["English","Hindi"]}
          />
          <div>
            <input type="file" {...register("notes")} id=""  />
          </div>
          <button type="submit" className="bg-[rgba(0,0,0,0.51)] flex items-center  text-white w-40 mx-auto  px-2 py-3 rounded-tl-2xl rounded-br-2xl hover:rounded-2xl my-5 transition-all">
            <Upload className="px-2 size-8" /> Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Notesupload;
