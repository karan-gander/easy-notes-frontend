/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "../../components/Navbar";
import adminDashboard from "/dashboard2.svg";
import { Link, useNavigate } from "react-router-dom";
import { StickyNote ,NotebookPen,LogOut} from "lucide-react";
import Button from "../../components/Button";
import { useApi } from "../../controllers/useApi";
const Dashboard = () => {
    const navigate  = useNavigate()
  const handleLogout =async ()=>{
    const response = await usePostApi("post","http://localhost:10000/api/v1/admin/logout")
    // console.log("response of logout",response)
    navigate("/admin-signin")
    
  }
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
          <div className="bg-white w-fit h-[450px]  flex flex-col  space-y-5 items-center p-10 rounded-md">
           
            <h2 className="text-xl font-medium leading-tight  text-primary sm:text-xl">
            Welcome to Your Admin Dashboard:- Where Control Meets Clarity
            </h2>

            <Link to="/upload-notes"><Button customClass="bg-white shadow-lg border-2 flex w-full items-center justify-centerbg-white shadow-lg border-2 flex w-full items-center justify-center"><NotebookPen color="#4f028f" size={65}/> Upload Notes</Button></Link>
            <Link to="/upload-papers"><Button customClass="bg-white shadow-lg border-2 flex w-full items-center justify-center"><StickyNote color="#4f028f" size={65}/>Upload Old-Papers</Button></Link>
            <div className="text-xl text-white rounded-md bg-primary px-5 py-2" onClick={handleLogout}><LogOut/></div>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
