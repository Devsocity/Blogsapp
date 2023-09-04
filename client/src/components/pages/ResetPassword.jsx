import React from "react";

const ResetPassword = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center   bg-[#030822] h-screen w-screen">
        <div className="p-8 bg-white rounded-xl  space-y-4 w-10/12 md:w-4/12">
          <p className="text-2xl font-semibold">Update your passoword</p>
          <hr />

          <p className="font-semibold text-lg">Password -</p>
          <input
            className="bg-slate-200 p-2 text-lg font-semibold outline-none border rounded-md  w-full"
            type="password"
          />
          <p className="font-semibold text-lg">Conform Password -</p>
          <input
            className="bg-slate-200 p-2 text-lg font-semibold outline-none border rounded-md  w-full"
            type="password"
          />

          <p className="text-xl bg-blue-500 text-white  w-full p-1 rounded-md text-center cursor-pointer  font-semibold">
            Update
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
