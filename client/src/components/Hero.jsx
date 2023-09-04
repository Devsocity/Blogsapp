import React from "react";
import banner from "../assets/1322308.jpeg";
import { MdLogoDev } from "react-icons/md";
import { TbBookmark, TbHeart, TbMessage, TbMoodHeart } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="w-11/12 mx-auto sm:pt-20 pt-10 mt-16  sm:mt-20  group py-64 mb-56 ">
      <p className=" text-4xl sm:text-5xl text-gray-800 font-bold">
        Hero secssion
      </p>
      <p className="text-xl text-gray-500 my-5 sm:my-10 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        minus.
      </p>

      <div className="relative   cursor-pointer">
        <img
          className=" w-full group-hover:scale-105 duration-500  sm:w-7/12  bg-indigo-300  absolute right-0 sm:right-10 top-0 rounded-3xl "
          src={banner}
          alt=""
        />
        <div className="absolute group-hover:scale-105 duration-700   left-8 sm:left-10 mt-36 sm:mt-5   sm:top-12   py-10 rounded-3xl p-5 w-10/12 sm:w-5/12   shadow-lg  backdrop-blur-xl  bg-white bg-opacity-20 ">
          <p className="bg-yellow-300 font-semibold w-fit px-2 py-1 rounded-md">
            author
          </p>
          <p className=" text-xl  sm:text-2xl font-semibold py-3 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
            reprehenderit.
          </p>

          <div className="flex items-center gap-4 ">
            <img src={banner} className="w-12 h-12 rounded-full" alt="" />
            <div>
              <p className="font-semibold  text-gray-600 ">Sajib sikder</p>
              <p className="text-sm ">14 May 2023</p>
            </div>
          </div>
          <div className="sm:mt-10 flex gap-4  items-center">
            <p className="font-semibold text-base   flex  items-center gap-2">
              <TbHeart className="text-lg" />
              12
            </p>
            <p className="font-semibold text-base   flex  items-center gap-2">
              <TbMessage className="text-lg" />5
            </p>
            <p className="font-semibold text-base   flex  items-center gap-2 ms-auto">
              <TbBookmark className="text-xl bg-slate-300 h-8 w-8 rounded-md cursor-pointer" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
