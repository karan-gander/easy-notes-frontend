// import React from 'react'
import mainPhoto from "/main.mp4"
import Form from "./Form"
const Hero = ({page,opp}) => {
  return (
    <div className='h-[100vh] overflow-y-auto  w-full bg-[#4f028f] flex items-center justify-center flex-wrap md:space-y-10 md:flex-nowrap  '>
        <div className=" rounded h-1/2 w-full max-h-96 min-h-52 flex items-center justify-center md:mt-20 ">
        <video src={mainPhoto} loop autoPlay muted className="h-full w-[80%] md:w-[90%]"></video>
        </div>
        <div className="p-8 w-full h-[450px] rounded-lg flex justify-center  ">
            <Form page={page} opp={opp} />
        </div>

    </div>
  )
}

export default Hero