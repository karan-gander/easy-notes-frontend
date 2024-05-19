import Navbar from "../../components/Navbar";
import adminImg from "/admin.svg";
import Select from "../../components/Select";
import { Upload } from "lucide-react";
const Oldpapersupload = () => {
  return (
    <>
      <Navbar />
      <div className="bg-primary w-full h-full flex flex-wrap justify-around items-center px-10 overflow-auto">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h2 className="text-white text-2xl font-popins">Upload Old Papers</h2>

          <img src={adminImg} className="size-80" alt="" />
        </div>
        <form className="">
          <Select
            label="Branch"
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
          <Select
            label="Year"
            options={[
              "Select Your Year",
              "First Year",
              "Second Year",
              "Third Year",
            ]}
            values={["CE", "ME", "EL", "ELC", "CS"]}
          />
          <Select
            label="Semester"
            options={[
              "Select Your Semester",
              "First Semester",
              "Second Semester",
              "Third Semester",
              "Fourth Semester",
              "Five Semester",
              "Six Semester",
            ]}
            values={["CE", "ME", "EL", "ELC", "CS"]}
          />
          
          <div>
            <input type="file" name="" id="" />
          </div>
          <button className="bg-[rgba(0,0,0,0.51)] flex items-center  text-white w-40 mx-auto  px-2 py-3 rounded-tl-2xl rounded-br-2xl hover:rounded-2xl my-5 transition-all">
            <Upload className="px-2 size-8" /> Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Oldpapersupload;
