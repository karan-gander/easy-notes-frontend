import Navbar from "../../components/Navbar";
import adminDashboard from "/dashboard2.svg";
import { Link } from "react-router-dom";
import { StickyNote ,NotebookPen} from "lucide-react";
import Button from "../../components/Button";
const Dashboard = () => {
  return (
    <>
    {/* <ToastContainer position="top-center" /> */}
      <div className="font-popins w-full flex flex-col h-full">
      
        <Navbar />
        <div className="bg-primary w-full h-full flex flex-col items-center justify-around  px-3 py-5 md:flex-row">
          
          <div className="h-96 w-fit flex items-center justify-center">
            <img
              src={adminDashboard}
              className="h-full w-[80%] md:w-[90%] min-w-[300px] "
            />
          </div>
          <div className="bg-white w-fit h-96  flex flex-col  space-y-5 items-center p-10 rounded-md">
            <h2 className="text-xl font-medium leading-tight  text-primary sm:text-xl">
            Welcome to Your Admin Dashboard:- Where Control Meets Clarity
            </h2>
        
            <Link to="/upload-notes"><Button customClass="bg-white shadow-lg border-2 flex w-full items-center justify-centerbg-white shadow-lg border-2 flex w-full items-center justify-center"><NotebookPen color="#4f028f" size={65}/> Upload Notes</Button></Link>
            <Link to="/upload-papers"><Button customClass="bg-white shadow-lg border-2 flex w-full items-center justify-center"><StickyNote color="#4f028f" size={65}/>Upload Old-Papers</Button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
