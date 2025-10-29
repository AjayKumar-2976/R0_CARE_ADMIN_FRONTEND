

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import verificationImage from "../../assets/Verify-OTP.png";

export default function VerifyOtp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < 3) inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 4);
    if (/^\d{4}$/.test(pasteData)) {
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      inputRefs.current[3].focus();
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleVerify = () => {
    if (isOtpComplete) {
      // Navigate to reset password page
      navigate("/resetpassword");
    }
  };

  return (
    <main className="min-h-screen bg-[#7EC1B1] flex items-center justify-center p-6">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl rounded-3xl overflow-hidden  bg-white">
        
        {/* Left side - Image */}
        <div className="hidden lg:flex flex-1 bg-[#7EC1B1] items-center justify-center p-12">
          <img
            src={verificationImage}
            alt="OTP Verification"
            className="w-full h-full max-w-xl object-contain"
          />
        </div>

        {/* Right side - Form */}
        <div className="flex-1 flex flex-col justify-center px-12 py-16 lg:py-24">
          <div className="max-w-md w-full mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#263138] mb-6">
              Verify OTP
            </h1>
            <p className="text-gray-600 mb-12 text-base">
              Please enter the 4-digit code sent to your email.
            </p>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-4 mb-8" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-16 h-16 sm:w-20 sm:h-20 text-center text-3xl font-semibold border-2 border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#7EC1B1] transition"
                />
              ))}
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerify}
              disabled={!isOtpComplete}
              className={`w-full py-5 rounded-xl text-white font-semibold text-lg transition-all duration-300 ${
                isOtpComplete
                  ? "bg-[#7EC1B1] hover:bg-[#68a998]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Verify
            </button>

            {/* Resend OTP */}
            <p className="text-gray-500 text-sm mt-6">
              Didn’t receive the code?{" "}
              <span className="text-[#82a89f] hover:underline cursor-pointer">
                Resend OTP
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
