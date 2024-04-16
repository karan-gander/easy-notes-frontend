// import React from 'react'
import SignUp from "./pages/SignUp"
import {Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import AboutPage from "./pages/About"
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutPage/>} />
    </Routes>
    </>
  )
}

export default App