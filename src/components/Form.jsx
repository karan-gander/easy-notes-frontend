// import React from 'react'
import TextInput from './TextInput'
import Button from './Button'
const Form = () => {
  return (
    <div className='bg-white w-full h-full flex flex-col  space-y-5 items-center py-20 rounded-md'>
        <div>
        <h2 className="text-sm font-bold leading-tight text-black sm:text-xl">Sign up</h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <a
                href="#"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </a>
            </p>
        </div>
        <form action="" className='space-y-5 '>
        <TextInput placeholder="Enter Your Email Address" />
        <TextInput placeholder="Password"/>
        <Button >Sign Up</Button>
        </form>
    </div>
  )
}

export default Form