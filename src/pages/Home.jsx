// import React from 'react'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import mainPhoto from "/main.mp4"
const Home = () => {
  return (
    <>
    <div className='h-[100vh] overflow-y-scroll px-5 w-full bg-[#4f028f] flex flex-col items-center justify-center flex-wrap md:space-y-10 md:flex-nowrap  '>

        <div className='text-white font-popins space-y-5'>
          <motion.h1 className='text-center text-2xl font-bold tracking-wider'
          initial={{opacity:0,y:500}}
          animate={{opacity:1,y:0}}
          transition={
            {
              duration:2
            }
          }
          >
            Easy Notes
          </motion.h1>
         
          <motion.h4 
          initial={{opacity:0,x:200}}
          animate={{opacity:1,x:0}}
          transition={{
            duration:2
          }}
          className='text-sm md:xl'
          >
          Simplify Your Study Journey with Easy Notes
          </motion.h4>
         
        </div>

        <div className=" rounded h-1/2 w-full max-h-96 min-h-52 flex items-center space-y-10 flex-col md:mt-20 ">
        <video src={mainPhoto} loop autoPlay muted className="h-full mt-5 w-[80%] md:w-[90%]"></video>
        <Button customClass="bg-white font-popins text-[#4f028f]  hover:bg-[#fff]/90 "><Link to="/signUp">Get Started</Link></Button>
        </div>
        
    </div>
    
    </>
  )
}

export default Home