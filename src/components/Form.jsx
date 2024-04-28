// import React from 'react'
import TextInput from './TextInput'
import Button from './Button'
import { Link } from 'react-router-dom'
const Form = ({page,opp}) => {
  return (
    <div className='bg-white w-fit h-full flex flex-col  space-y-5 items-center p-20 rounded-md '>
        <div>
        <h2 className="text-xl font-medium leading-tight text-black sm:text-xl">{page}</h2>
           {!opp&& <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <a
                href="#"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                <Link to="/signin" >Sign In</Link>
              </a>
            </p>}
        </div>
        <form action="" className='space-y-5 '>
        <TextInput placeholder="Enter Your Email Address" />
        <TextInput placeholder="Password"/>
        <Button  customClass="bg-[#4f028f] text-white  hover:bg-[#4f028f]/90"><Link to="">{page}</Link></Button>
        <br />
        {opp&&<Button customClass="bg-[#4f028f]  hover:bg-[#4f028f]/90  text-white"><Link to="/signup">Create Account</Link></Button>}
        </form>
    </div>
  )
}

export default Form