// import React from 'react'
import mainPhoto from "/public/main.mp4"
import Form from "./Form"
const Hero = () => {
  return (
    <div className='h-[85vh] w-full bg-[#4f028f] flex items-center justify-around flex-wrap md:space-y-10'>
        <div className=" rounded h-1/2 min-w-52 max-h-96 min-h-52 flex items-center justify-center">
        <video src={mainPhoto} loop autoPlay muted className="h-full w-[80%] md:w-[90%]"></video>
        </div>
        <div className="border w-1/2 h-[450px] rounded-lg shadow-xl xl:w-1/4 xl:h-72">
            <Form />
        </div>

    </div>
  )
}

export default Hero