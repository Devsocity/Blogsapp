import React, { useState } from "react";
import { MdHistory } from "react-icons/md";

const SeachModdel = ({ search, setsearch }) => {
  return (
    search && (
      <div
        className={`fixed  w-screen  top-0   left-0 
      h-screen overflow-x-hidden bg-black bg-opacity-20    z-10 flex 
    justify-center items-center`}
      >
        <div
          className={`p-10 bg-white   duration-300 mt-10    w-11/12  "  
         sm:w-6/12 
            h-4/5  rounded-3xl  z-10`}
        >
          <input
            className="p-2 focus:outline-none mb-3  w-full rounded-md"
            type="text"
            placeholder="Search here"
          />
          <hr />

          <div className="p-4">
            <p className="text-gray-800 text-sm font-semibold">Blogs</p>
            <p className="flex items-center gap-3 my-4 text-lg text-gray-700">
              <MdHistory className="text-3xl " /> Javascript about
            </p>
            <p className="flex items-center gap-3 my-4 text-lg text-gray-700">
              <MdHistory className="text-3xl " /> Javascript about
            </p>
            <p className="flex items-center gap-3 my-4 text-lg text-gray-700">
              <MdHistory className="text-3xl " /> Javascript about
            </p>
          </div>
        </div>

        <div
          onClick={() => setsearch(false)}
          className="absolute z-0  top-0 left-0 w-screen h-screen "
        ></div>
      </div>
    )
  );
};

export default SeachModdel;
