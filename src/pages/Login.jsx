import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import React from 'react'

const Login = () => {
  return (
    <>
    <Navbar />
    <Hero page="Sign In" opp={true}/>
    </>
  )
}

export default Login