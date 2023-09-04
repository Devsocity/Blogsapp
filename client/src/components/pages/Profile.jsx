import React, { useState } from "react";
import banner from "../../assets/1322308.jpeg";
import { Helmet } from "react-helmet";
import {
  MdFacebook,
  MdPersonAddAlt1,
  MdSettings,
  MdVerified,
} from "react-icons/md";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import ProfileUpdate from "../modals/ProfileUpdate";
const Profile = () => {
  const [profileupdate, setprofleupdate] = useState(false);

  return (
    <div className="mt-10 pt-14">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ProfileUpdate
        profileupdate={profileupdate}
        setprofleupdate={setprofleupdate}
      />
      <div className="w-11/12 mx-auto ">
        <div className="flex gap-5">
          {/* profile start  */}
          <div className=" w-full  md:w-9/12 relative ">
            <img
              src={banner}
              className="h-72  w-full object-cover rounded-3xl  "
              alt=""
            />
            <div className="flex  gap-5 absolute p-5 top-[180px] md:top-[220px] w-11/12    left-0 right-0  translate-x-4 md:translate-x-10 rounded-3xl   bg-white  shadow-md ">
              <img
                src={banner}
                className="rounded-full w-24 h-24   md:w-32 md:h-32  object-cover ring-2 ring-white shadow-sm"
                alt=""
              />
              <MdSettings
                onClick={() => setprofleupdate(true)}
                className="absolute  top-7 text-slate-700 cursor-pointer bg-slate-200 rounded-full text-2xl  left-24 md:left-32  "
              />

              <div className="w-full">
                <div className="flex gap-4 items-center   w-full flex-wrap  ">
                  <p className="font-bold text-3xl">Sajib sikder</p>{" "}
                  <MdVerified className=" text-cyan-400 text-3xl" />
                  <p className="md:ms-auto  flex bg-green-400 text-white items-center  justify-center gap-3 w-fit rounded-2xl  px-3 font-semibold text-lg py-1 cursor-pointer">
                    Follow{" "}
                    <MdPersonAddAlt1 className="bg-white text-green-400 rounded-full p-1 h-6 w-6 ms-auto" />
                  </p>
                </div>
                <p className="md:w-10/12 my-2 md:my-0 font-semibold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci ea, rerum molestias animi consequatur voluptatibus
                  esse minus. Consequatur, quas asperiores.
                </p>
                <div className="flex text-2xl text-gray-500  gap-1 py-2">
                  <MdFacebook className="cursor-pointer " />
                  <AiFillLinkedin className="cursor-pointer " />
                  <AiFillInstagram className="cursor-pointer " />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-3/12 p-2 bg-white rounded-3xl mb-10 shadow-lg">
            <p className="text-gray-800 font-semibold text-lg p-3">
              People you know
            </p>

            {/* follower div  */}

            <div className="space-y-4 mb-3 px-2">
              <div
                className="flex items-center
             justify-between gap-2"
              >
                <img
                  src={banner}
                  className="h-10 w-10 rounded-full object-cover"
                  alt=""
                />
                <p className="font-semibold text-gray-500 text-sm">
                  Sajib devs
                </p>
                <p className="ms-auto  flex bg-green-400 text-white items-center  justify-center gap-2 w-fit rounded-xl  px-2 py-1 font-semibold text-base  cursor-pointer">
                  Follow{" "}
                  <MdPersonAddAlt1 className="bg-white text-green-400 rounded-full p-1 h-5 w-5 ms-auto" />
                </p>
              </div>
              <div
                className="flex items-center
             justify-between gap-2"
              >
                <img
                  src={banner}
                  className="h-10 w-10 rounded-full object-cover"
                  alt=""
                />
                <p className="font-semibold text-gray-500 text-sm">
                  Sajib devs
                </p>
                <p className="ms-auto  flex bg-green-400 text-white items-center  justify-center gap-2 w-fit rounded-xl  px-2 py-1 font-semibold text-base  cursor-pointer">
                  Follow{" "}
                  <MdPersonAddAlt1 className="bg-white text-green-400 rounded-full p-1 h-5 w-5 ms-auto" />
                </p>
              </div>
              <div
                className="flex items-center
             justify-between gap-2"
              >
                <img
                  src={banner}
                  className="h-10 w-10 rounded-full object-cover"
                  alt=""
                />
                <p className="font-semibold text-gray-500 text-sm">
                  Sajib devs
                </p>
                <p className="ms-auto  flex bg-green-400 text-white items-center  justify-center gap-2 w-fit rounded-xl  px-2 py-1 font-semibold text-base  cursor-pointer">
                  Follow{" "}
                  <MdPersonAddAlt1 className="bg-white text-green-400 rounded-full p-1 h-5 w-5 ms-auto" />
                </p>
              </div>
              <div
                className="flex items-center
             justify-between gap-2"
              >
                <img
                  src={banner}
                  className="h-10 w-10 rounded-full object-cover"
                  alt=""
                />
                <p className="font-semibold text-gray-500 text-sm">
                  Sajib devs
                </p>
                <p className="ms-auto  flex bg-green-400 text-white items-center  justify-center gap-2 w-fit rounded-xl  px-2 py-1 font-semibold text-base  cursor-pointer">
                  Follow{" "}
                  <MdPersonAddAlt1 className="bg-white text-green-400 rounded-full p-1 h-5 w-5 ms-auto" />
                </p>
              </div>
              <div
                className="flex items-center
             justify-between gap-2"
              >
                <img
                  src={banner}
                  className="h-10 w-10 rounded-full object-cover"
                  alt=""
                />
                <p className="font-semibold text-gray-500 text-sm">
                  Sajib devs
                </p>
                <p className="ms-auto  flex bg-green-400 text-white items-center  justify-center gap-2 w-fit rounded-xl  px-2 py-1 font-semibold text-base  cursor-pointer">
                  Follow{" "}
                  <MdPersonAddAlt1 className="bg-white text-green-400 rounded-full p-1 h-5 w-5 ms-auto" />
                </p>
              </div>
              <div
                className="flex items-center
             justify-between gap-2"
              >
                <img
                  src={banner}
                  className="h-10 w-10 rounded-full object-cover"
                  alt=""
                />
                <p className="font-semibold text-gray-500 text-sm">
                  Sajib devs
                </p>
                <p className="ms-auto  flex bg-green-400 text-white items-center  justify-center gap-2 w-fit rounded-xl  px-2 py-1 font-semibold text-base  cursor-pointer">
                  Follow{" "}
                  <MdPersonAddAlt1 className="bg-white text-green-400 rounded-full p-1 h-5 w-5 ms-auto" />
                </p>
              </div>
            </div>
            {/* follower div  */}
          </div>
          {/* profile end  */}

          {/* follower div start  */}

          {/* follower div end  */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
