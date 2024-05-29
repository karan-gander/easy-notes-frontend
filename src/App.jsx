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
import OldPapers from "./pages/OldPapers.jsx";
import { Authprovider } from "./contexts/Authcontext.jsx";
import { AdminAuthprovider } from "./contexts/AdminAuthContext.jsx";
import Oldpapersupload from "./admin/pages/Oldpaperupload.jsx";
import DownloadPage from "./pages/DownloadPage.jsx";
import Notesupload from "./admin/pages/Notesupload.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import AdminLogin from "./admin/pages/Adminlogin.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Authprovider><Login /></Authprovider>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Authprovider><Notes /></Authprovider>} />
        <Route path="/old-papers" element={<Authprovider><OldPapers /></Authprovider>} />
        <Route path="/my-team" element={<AboutPage />} />
        {/* <Route path="/download" element={<DownloadPage />} /> */}
        <Route path="/my-profile" element={<Authprovider><MyProfile /></Authprovider>} />

        {/* admin routes */}

        <Route path="/admin-signin" element={<AdminAuthprovider><AdminLogin /></AdminAuthprovider>} />
        <Route path="/admin-dashboard" element={<AdminAuthprovider><Dashboard /></AdminAuthprovider>} />
        <Route path="/upload-papers" element={<AdminAuthprovider><Oldpapersupload/></AdminAuthprovider>} />
        <Route path="/upload-notes" element={<AdminAuthprovider><Notesupload /></AdminAuthprovider>} />
        
        <Route path="/*" element={<ErrorOne />} />
        {/* <Route path="/loading" element={<LoadingButton />} /> */}
      </Routes>
    </>
  );
};

export default App;
