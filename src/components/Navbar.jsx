// import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="bg-[#4f028f] w-full h-[15vh] flex justify-between items-center px-20 text-white">
       <div className="text-xl">NotesHub</div>
        <div className="hidden"><RxHamburgerMenu /></div>
        <ul className="flex space-x-5">
          {/* <li>Home</li>
          <li>Notes</li>
          <li>About Us</li>
          <li>Contact Us</li> */}
          <Link className="hover:text-[#e5e1e8]">Home</Link>
          <Link className="hover:text-[#e5e1e8]">Notes</Link>
          <Link className="hover:text-[#e5e1e8]">About Us</Link>
          <Link className="hover:text-[#e5e1e8]">Contact Us</Link>
        </ul>
        
       
    
    </div>
  )
}

export default Navbar