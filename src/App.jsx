// import React from 'react'
import SignUp from "./pages/SignUp"
import {Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Notes from "./pages/Notes"
import AboutPage from "./pages/About"
import { ErrorOne } from "./pages/ErrorOne"
import LoadingButton from "./components/Loadding"
import Dashboard from "./admin/Dashboard"
import OldPapers from "./components/OldPapers"
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/signin" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/notes" element={<Notes/>} />
      <Route path="/old-papers" element={<OldPapers/>} />
      <Route path="/about" element={<AboutPage/>} />

      {/* admin routes */}

      <Route path="/admin-dashboard" element={<Dashboard />}/>

      <Route path="/*" element={<ErrorOne/>} />
      <Route path="/loading" element={<LoadingButton/>} />
    </Routes>
    </>
  )
}

export default App