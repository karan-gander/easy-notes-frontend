import myTeam from "/myteam.svg"
import Navbar from "../components/Navbar"
const About = ()=>{
  return (
    <>
      <Navbar />

      <div className="bg-primary w-full h-full flex flex-col md:flex-row justify-around items-center px-10 overflow-auto flex-grow basis-1/2">
        <div className="flex flex-col w-full md:w-1/2 items-center justify-center space-y-5 p-[5%]">
          <h2 className="text-white text-2xl font-popins">Developed by GPC JODHPUR</h2>
          <h4 className="text-white font-popins">Department of Computer Science and Engineering</h4>
          <img
            src={myTeam}
            className="w-full p-10 aspect-square max-w-lg min-w-72"
            alt=""
          />
        </div>
        <div className="w-full h-full flex items-center justify-center  p-[5%]">
          <div className="bg-white w-full h-96 rounded-md p-10 shadow-xl text-center space-y-5">
            <h1 className="text-xl text-primary font-popins">Meet My Team</h1>
            <ul>
              <li>Karan Meghawal</li>
              <li>Suhail Malik</li>
              <li>Khushali Goswami</li>
              <li>Hema Kanwar</li>
            </ul>
            {/* <div className="bg-gray-950 h-32 w-full p-5 text-white">
                <h1 className="text-white">Admin Contact Details</h1>
                <h2 className="text-wrap">meghawalkaran@gmail.com</h2>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}


export default About