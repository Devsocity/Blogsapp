import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { MdVerifiedUser } from "react-icons/md";

const Otp = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="flex items-center justify-center   bg-[#030822] h-screen w-screen">
      <div className="p-10 bg-white rounded-xl flex items-center justify-center flex-col gap-6 md:py-14 w-10/12 md:w-4/12">
        <MdVerifiedUser className="w-14  h-14 bg-blue-500 text-white rounded-full p-2" />
        <p className="text-2xl font-semibold">Enter otp code</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          inputStyle={{
            width: "60px",
            height: "60px",
            fontSize: "27px",
            fontWeight: "bold",
            border: "2px solid gray",
            borderRadius: "5px",
            margin: "0px 10px",
          }}
          numInputs={4}
          renderInput={(props) => <input className="" {...props} />}
        />

        <p className="text-xl bg-blue-500 text-white w-8/12 p-1 rounded-md text-center cursor-pointer  font-semibold">
          Verify OTP
        </p>
      </div>
    </div>
  );
};

export default Otp;
