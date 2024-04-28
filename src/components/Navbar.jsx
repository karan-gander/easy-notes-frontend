// import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      <div className="bg-[#4f028f] w-full py-[2.39rem] flex justify-between items-center px-20 text-white  sticky  top-0 shadow-xl">
        <div className="text-xl font-popins">Easy Notes</div>
        <div className="md:hidden">
          <RxHamburgerMenu
            className="cursor-pointer text-xl"
            onPointerUp={handleMenu}
          />
        </div>

        <ul className=" space-x-5 hidden md:flex ">
          <Link to="/" className="hover:text-[#e5e1e8]">
            Home
          </Link>
          <Link to="/notes" className="hover:text-[#e5e1e8]">
            Notes
          </Link>
          <Link to="/old-papers" className="hover:text-[#e5e1e8]">
            Old Papers
          </Link>
          <Link to="/about-us" className="hover:text-[#e5e1e8]">
            About Us
          </Link>
          <Link to="contact-us" className="hover:text-[#e5e1e8]">
            Contact Us
          </Link>
          <Link className="hover:text-[#e5e1e8] hidden">Log Out</Link>
        </ul>

        {/* Mobile Views */}
        <div
          className={`w-full h-[450px] bg-transparent p-5 absolute z-10  left-0  right-0 font-popins font-medium transition-all duration-500 ${
            mobileMenu ? "top-0" : "-top-[500px]"
          }`}
        >
          <div className="bg-white w-full h-full text-[#4f028f] p-5 space-y-10 rounded-md">
            <div className="w-full flex justify-between ">
              <span className="font-popins">Easy Notes</span>
              <span className="text-xl cursor-pointer">
                <MdClose onClick={handleMenu} />
              </span>
            </div>
            <ul className="bg-white w-full text-[#4f028f] flex flex-col items-center  ">
              <Link to="/" className="hover:text-[#e5e1e8] font-popins">
                Home
              </Link>
              <Link to="/notes" className="hover:text-[#e5e1e8]">
                Notes
              </Link>
              <Link to="/old-papers" className="hover:text-[#e5e1e8]">
                Old Papers
              </Link>
              <Link to="/about-us" className="hover:text-[#e5e1e8]">
                About Us
              </Link>
              <Link to="contact-us" className="hover:text-[#e5e1e8]">
                Contact Us
              </Link>
              <Link className="hover:text-[#e5e1e8] hidden">Log Out</Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
