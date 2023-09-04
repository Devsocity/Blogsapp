import React, { useState } from "react";
import {
  MdSearch,
  MdAccountBox,
  MdNotifications,
  MdBarChart,
} from "react-icons/md";
import { TbArrowBadgeLeftFilled, TbArticleFilledFilled } from "react-icons/tb";
import logo from "../assets/logo.gif";
import SeachModdel from "./modals/SeachModal";
import ProfileModal from "./modals/ProfileModal";
import ProfileUpdate from "./modals/ProfileUpdate";
import { Link } from "react-router-dom";
const Header = () => {
  const [manu, setmanu] = useState(false);
  const [search, setsearch] = useState(false);
  const [profile, setprofle] = useState(false);

  return (
    <div className="px-10 py-3 bg-white shadow-md  flex items-center justify-between  fixed top-0 left-0 w-full z-20">
      <SeachModdel search={search} setsearch={setsearch} />

      {/* logo start */}

      <Link to={"/"}>
        <img
          className="w-32 object-cover cursor-pointer ms-24 sm:ms-0 "
          src={logo}
          alt="Blog app"
        />
      </Link>
      {/* logo end */}

      {/* center manu start */}

      <ul
        className={`flex  flex-col py-5 duration-300 sm:py-0 h-screen sm:h-auto sm:flex-row items-center justify-center gap-5 absolute sm:relative top-0 ${
          manu ? "left-0" : "left-[-287px]"
        }  sm:left-0 bg-white border sm:border-none w-8/12 sm:w-auto`}
      >
        {/* mobile button start  */}

        <TbArticleFilledFilled
          onClick={() => setmanu(!manu)}
          className={`sm:hidden text-5xl duration-300   absolute  ${
            manu ? "  top-24 right-[-60px] " : " top-4 right-[-80px]  "
          } cursor-pointer`}
        />

        {/* mobile button end */}

        <li className="text-slate-700 font-semibold text-xl hover:bg-slate-200 cursor-pointer  px-2 py-1  duration-150 w-7/12 sm:w-auto  rounded-md text-center">
          Home
        </li>
        <li className="text-slate-700 font-semibold text-xl hover:bg-slate-200 cursor-pointer  px-2 py-1  duration-150 w-7/12 sm:w-auto  rounded-md text-center">
          Blogs
        </li>
        <li className="text-slate-700 font-semibold text-xl hover:bg-slate-200 cursor-pointer  px-2 py-1  duration-150 w-7/12 sm:w-auto  rounded-md text-center">
          About
        </li>
        <li className="text-slate-700 font-semibold text-xl hover:bg-slate-200 cursor-pointer md:hidden  px-2 py-1  duration-150 w-7/12 sm:w-auto  rounded-md text-center">
          My account
        </li>
        <li className="text-slate-700 font-semibold text-xl hover:bg-slate-200 cursor-pointer  px-2 py-1 md:hidden  duration-150 w-7/12 sm:w-auto  rounded-md text-center">
          Logout
        </li>
      </ul>
      {/* center manu end */}
      {/* side menu start*/}

      <ul className="flex items-center justify-center gap-2">
        <li className="hover:bg-gray-200 text-3xl text-gray-700 cursor-pointer rounded-full p-1 duration-150">
          <MdSearch onClick={() => setsearch(true)} />
        </li>
        <li className="hover:bg-gray-200 text-3xl text-gray-700 hidden sm:block cursor-pointer rounded-full p-1 duration-150">
          <MdNotifications />
        </li>
        <li className="relative hover:bg-gray-200 text-3xl text-gray-700 cursor-pointer hidden sm:block rounded-full p-1 duration-150">
          <MdAccountBox onClick={() => setprofle(!profile)} />
          <ProfileModal setprofle={setprofle} profile={profile} />
        </li>
      </ul>
      {/* side menu end */}
    </div>
  );
};

export default Header;
