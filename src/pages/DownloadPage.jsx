import React from "react";
import Navbar from "../components/Navbar";
import pdfIcon from "/pdf.png";

const DownloadPage = ({notesData}) => {
  return (
    <div>
      <Navbar />
      <main className="flex-grow p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
          <div className="bg-gray-200 p-4">
            <img src={pdfIcon} className="size-20" alt="" />
            <p>File Name</p>
          </div>
          <div className="bg-gray-200 p-4">Content 2</div>
          <div className="bg-gray-200 p-4">Content 3</div>
          <div className="bg-gray-200 p-4">Content 4</div>
          <div className="bg-gray-200 p-4">Content 5</div>
          <div className="bg-gray-200 p-4">Content 6</div>
          <div className="bg-gray-200 p-4">Content 7</div>
          <div className="bg-gray-200 p-4">Content 8</div>
        </div>
      </main>
    </div>
  );
};

export default DownloadPage;
