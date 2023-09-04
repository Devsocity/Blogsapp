import React from "react";
import image from "../assets/1322308.jpeg";
import { MdArrowForward, MdJoinLeft, MdSwipeLeftAlt } from "react-icons/md";
const Singleauthor = () => {
  return (
    <div className="bg-white h-72 pb-2  cursor-pointer rounded-3xl  overflow-hidden">
      <div className="relative h-3/5 ">
        <div className="absolute top-4 left-4 bg-white rounded-lg w-fit px-4 font-semibold  flex items-center gap-2">
          125 <MdArrowForward />
        </div>
        <img src={image} alt="" className="w-full h-full object-cover  " />
      </div>

      <div className="relative  flex items-center justify-center flex-col">
        <img
          src={image}
          className="w-16 h-16 absolute top-[-20px] ring-2 mx-auto ring-white rounded-full"
          alt=""
        />
        <p className="mt-12 font-semibold text-xl text-slate-700">
          Anisl hoque
        </p>
        <p className=" text-lg text-slate-600">anisu@gmail.com</p>
      </div>
    </div>
  );
};

export default Singleauthor;
