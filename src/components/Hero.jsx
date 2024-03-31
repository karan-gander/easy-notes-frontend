// import React from 'react'
import mainPhoto from "/public/main.mp4"
import Form from "./Form"
const Hero = () => {
  return (
    <div className='h-[85vh] w-full bg-[#4f028f] flex items-center justify-around'>
        <div className=" rounded h-1/2">
        <video src={mainPhoto} loop autoPlay muted className="h-full"></video>
        </div>
        <div className="border w-1/4 h-[450px] rounded-lg shadow-xl">
            <Form />
        </div>

    </div>
  )
}

export default Hero