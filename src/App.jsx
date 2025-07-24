// import React from 'react'
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import AboutPage from "./pages/About";
import TimeTable from "./pages/TimeTable.jsx";
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
import ProtectedRoute from "./admin/pages/ProtectedRoute.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/old-papers" element={<OldPapers />} />
        <Route path="/my-team" element={<AboutPage />} />
        {/* <Route path="/download" element={<DownloadPage />} /> */}
        <Route path="/my-profile" element={<MyProfile />} />

        {/* admin routes */}

        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={
          // <ProtectedRoute>
            <Dashboard />
          // </ProtectedRoute>
        } />
        <Route path="/upload-papers" element={<Oldpapersupload />} />
        <Route path="/upload-notes" element={<Notesupload />} />




        {/* Time Table Relted Route  */}
        {/* ********************************************************************************** */}
        <Route path="/time-table" element={<TimeTable />} />
        {/* ********************************************************************************** */}






        {/* <Route path="/login" element={<AdminAuthprovider><AdminLogin /></AdminAuthprovider>} />
        
        <Route path="/admin-dashboard" element={<AdminAuthprovider><Dashboard /></AdminAuthprovider>} />
        <Route path="/upload-papers" element={<AdminAuthprovider><Oldpapersupload/></AdminAuthprovider>} />
        <Route path="/upload-notes" element={<AdminAuthprovider><Notesupload /></AdminAuthprovider>} /> */}

        <Route path="/*" element={<ErrorOne />} />
        {/* <Route path="/loading" element={<LoadingButton />} /> */}
      </Routes>
    </>
  );
};

export default App;
