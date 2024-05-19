import Navbar from "../components/Navbar";
import Select from "../components/Select";
import takingnotes from "/kk.svg";
import { Search } from "lucide-react";
const Notes = () => {
  return (
    <>
      <Navbar />

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
          <form className="flex flex-col">
            
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
              <Select
                label="Medium"
                options={["Select Your Medium", "English", "Hindi"]}
                values={["CE", "ME", "EL", "ELC", "CS"]}
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
