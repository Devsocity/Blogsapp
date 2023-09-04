import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineLegendToggle } from "react-icons/md";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center   bg-[#030822] h-screen w-screen">
        <div className="p-8 bg-white rounded-xl  space-y-4 w-10/12 md:w-4/12">
          <p className="text-2xl font-semibold">Register</p>
          <hr />
          <p className="font-semibold text-lg">Username -</p>
          <input
            className="bg-slate-200 p-2 text-lg font-semibold outline-none border rounded-md  w-full"
            type="text"
          />
          <p className="font-semibold text-lg">Email -</p>
          <input
            className="bg-slate-200 p-2 text-lg font-semibold outline-none border rounded-md  w-full"
            type="text"
          />
          <p className="font-semibold text-lg">Password -</p>
          <input
            className="bg-slate-200 p-2 text-lg font-semibold outline-none border rounded-md  w-full"
            type="password"
          />

          <p className="text-xl bg-blue-500 text-white  w-full p-1 rounded-md text-center cursor-pointer  font-semibold">
            Register
          </p>
          <Link to={"/login"}>
            <p className="text-blue-500 font-semibold cursor-pointer mt-3">
              Have an account ?
            </p>
          </Link>
          <p className="flex items-center justify-center  gap-3  font-semibold bg-gray-300 text-gray-900 py-2 rounded-md cursor-pointer ">
            <FcGoogle className="h-7 w-7  " />
            Register with google
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
