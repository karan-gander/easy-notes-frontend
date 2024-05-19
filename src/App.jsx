// import React from 'react'
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import AboutPage from "./pages/About";
import { ErrorOne } from "./pages/ErrorOne";
import LoadingButton from "./components/Loadding";
import Dashboard from "./admin/pages/Dashboard.jsx";
import OldPapers from "./components/OldPapers";
import { Authprovider } from "./contexts/Authcontext.jsx";
import Oldpapersupload from "./admin/pages/Oldpaperupload.jsx";
import Notesupload from "./admin/pages/Notesupload.jsx";
import MyProfile from "./pages/MyProfile.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Authprovider><Login /></Authprovider>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/old-papers" element={<OldPapers />} />
        <Route path="/my-team" element={<AboutPage />} />
        <Route path="/my-profile" element={<Authprovider><MyProfile /></Authprovider>} />

        {/* admin routes */}

        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/upload-papers" element={<Oldpapersupload/>} />
        <Route path="/upload-notes" element={<Notesupload />} />
        
        <Route path="/*" element={<ErrorOne />} />
        <Route path="/loading" element={<LoadingButton />} />
      </Routes>
    </>
  );
};

export default App;
