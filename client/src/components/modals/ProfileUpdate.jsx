import React from "react";
import { avatarArray } from "../../assets/avatars";
import { MdDelete, MdEdit, MdStars } from "react-icons/md";
import banner from "../../assets/1322308.jpeg";

const ProfileUpdate = ({ profileupdate, setprofleupdate }) => {
  return (
    profileupdate && (
      <div
        className={`md:p-20  bg-black bg-opacity-20   h-screen w-screen  fixed top-0 left-0 z-20 flex  items-center justify-center duration-300  `}
      >
        <div
          className="absolute h-screen w-screen z-20 "
          onClick={() => setprofleupdate(false)}
        ></div>
        <div className="p-5 bg-white w-10/12   md:w-7/12 rounded-3xl z-30">
          <div className="py-3">
            <p className="bg-violet-500 w-fit text-white font-semibold rounded-lg px-4 py-1 cursor-pointer ">
              Emoji
            </p>
            <div className="flex gap-4 py-3 flex-wrap">
              {avatarArray?.map((item, key) => {
                return (
                  <div
                    className={`relative rounded-full cursor-pointer  ${
                      key == 4 && " ring-[5px] ring-offset-4 ring-violet-500 "
                    }`}
                  >
                    <img
                      className={`w-20   h-20  rounded-full object-cover   `}
                      src={item.image}
                      alt=""
                    />
                    {key == 4 && (
                      <MdStars className="absolute left-[-15px] top-0 h-6 w-6 text-violet-500 bg-violet-200 rounded-full" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="relative">
              <p className="bg-violet-500 w-fit text-white font-semibold rounded-lg px-4 py-1 cursor-pointer my-4 ">
                Photo
              </p>
              <div className="absolute top-10 left-28 p-1 bg-slate-100  rounded-md flex shadow-md border gap-2">
                <MdEdit className="bg-blue-400 text-white rounded-md h-5 w-5 cursor-pointer " />
                <MdDelete className="bg-red-400 text-white rounded-md h-5 w-5 cursor-pointer " />
              </div>
              <img
                className="w-40 h-36  rounded-lg object-cover"
                src={banner}
                alt=""
              />
            </div>

            <div
              className="space-x-4 mt-5
          "
            >
              <button
                onClick={() => setprofleupdate(false)}
                className="bg-blue-500 px-2 py-1 rounded-md font-semibold text-white"
              >
                Save
              </button>
              <button
                onClick={() => setprofleupdate(false)}
                className="text-red-500 border border-red-500  px-2 py-1 rounded-md font-semibold "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfileUpdate;
