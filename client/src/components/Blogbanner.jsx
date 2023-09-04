import React from "react";
import { MdArrowForward, MdForward } from "react-icons/md";
import image from "../assets/1322308.jpeg";
import { TbBookmark, TbHeart, TbMessage } from "react-icons/tb";

const Blogbanner = () => {
  return (
    <div
      className="w-11/12 mx-auto py-10
     "
    >
      <p className=" text-3xl sm:text-5xl text-gray-800 font-bold">
        Latest Articles
      </p>
      <p className="text-xl text-gray-500 my-2 sm:my-5 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        minus.
      </p>

      {/* blog cataroys */}
      <div className="flex gap-4 my-6 text-lg flex-wrap">
        <p className="bg-gray-900 text-white font-semibold w-fit p-2 rounded-lg  cursor-pointer">
          Garden
        </p>
        <p className="bg-gray-900 text-white font-semibold w-fit p-2 rounded-lg   cursor-pointer ">
          Programing
        </p>
        <p className="bg-gray-900 text-white font-semibold w-fit p-2 rounded-lg  cursor-pointer ">
          Tech
        </p>
        <p className="bg-gray-300 text-gray-800 md:ml-auto font-semibold w-fit p-2 rounded-lg flex gap-3 items-center  cursor-pointer">
          Veiw All <MdArrowForward />
        </p>
      </div>
      {/* blog cataroys */}

      {/* blog view  */}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative rounded-3xl  ">
          <p className="absolute top-4 left-4 w-fit p-2 rounded-lg bg-white font-semibold">
            Programing
          </p>

          <img src={image} alt="" className="rounded-3xl" />

          <div className="flex items-center gap-4 p-4">
            <img src={image} className="w-12 h-12 rounded-full" alt="" />
            <p className="font-semibold text-lg text-gray-800">Anisul hoque</p>
            <p className="text-gray-600">12 May 2023</p>
          </div>
          <p className="text-2xl font-bold  px-4">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="font-semibold text-gray-700 text-lg px-4 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ut quas
            pariatur. Cum, tempora. Qui.
          </p>
          <div className="sm:mt-10 flex gap-4  items-center mx-4">
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

        <div className="   space-y-4">
          <div className="p-5 border rounded-3xl bg-white flex       shadow-md">
            <img src={image} className="w-4/12 h-44 rounded-3xl" alt="" />
            <div className="w-8/12">
              <div className="flex items-center  p-4 gap-3">
                <img src={image} className="w-12 h-12 rounded-full" alt="" />
                <p className="font-semibold text-lg text-gray-800">
                  Anisul hoque
                </p>
                <p className="text-gray-600">12 May 2023</p>
              </div>
              <p className="text-2xl font-bold  px-4">
                Lorem ipsum dolor sit amet.
              </p>

              <div className="sm:mt-10 flex gap-4  items-center mx-4">
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
            </div>{" "}
          </div>
          <div className="p-5 border rounded-3xl bg-white flex   shadow-md                      ">
            <img src={image} className="w-4/12 h-44 rounded-3xl" alt="" />
            <div className="w-8/12">
              <div className="flex items-center  p-4 gap-3">
                <img src={image} className="w-12 h-12 rounded-full" alt="" />
                <p className="font-semibold text-lg text-gray-800">
                  Anisul hoque
                </p>
                <p className="text-gray-600">12 May 2023</p>
              </div>
              <p className="text-2xl font-bold  px-4">
                Lorem ipsum dolor sit amet.
              </p>

              <div className="sm:mt-10 flex gap-4  items-center mx-4">
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
            </div>{" "}
          </div>
          <div className="p-5 border rounded-3xl bg-white flex    shadow-md ">
            <img src={image} className="w-4/12 h-44 rounded-3xl" alt="" />
            <div className="w-8/12">
              <div className="flex items-center  p-4 gap-3">
                <img src={image} className="w-12 h-12 rounded-full" alt="" />
                <p className="font-semibold text-lg text-gray-800">
                  Anisul hoque
                </p>
                <p className="text-gray-600">12 May 2023</p>
              </div>
              <p className="text-2xl font-bold  px-4">
                Lorem ipsum dolor sit amet.
              </p>

              <div className="sm:mt-10 flex gap-4  items-center mx-4">
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
            </div>{" "}
          </div>
        </div>
      </div>
      {/* blog view  */}
    </div>
  );
};

export default Blogbanner;
