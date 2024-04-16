// import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
const SignUp = () => {
  return (
    <div className="font-popins w-full flex flex-col h-full">
      <div className="w-full mx-4 my-2 h-52 bg-white z-10 absolute hidden ">
          karan
       </div>
        <Navbar />
        <Hero page="Create Account" opp={false} />
    </div>
  )
}

export default SignUp