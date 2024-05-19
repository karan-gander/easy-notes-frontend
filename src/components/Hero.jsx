// import React from 'react'

import Form from "./Form"
const Hero = ({page,opp}) => {
  return (
    <div className='h-[100vh] overflow-y-auto  w-full bg-[#4f028f] flex items-center justify-center flex-wrap md:space-y-10 md:flex-nowrap  '>
        <div className=" rounded h-1/2 w-full max-h-96 min-h-52 flex items-center justify-center md:mt-20 ">
       
        </div>
        <div className="p-8 w-full h-[500px] rounded-lg flex justify-center  ">
            <Form page={page} opp={opp} />
        </div>

    </div>
  )
}

export default Hero