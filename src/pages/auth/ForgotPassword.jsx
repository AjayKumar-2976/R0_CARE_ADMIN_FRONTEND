

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import forgotpassword from "../../assets/Forgot-Password.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Simple email validation regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleGetOtp = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter an email");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    // Email is valid, clear error and navigate
    setError("");
    navigate("/verify-otp");
  };

  return (
    <div className="min-h-screen bg-[#7EC1B1] flex items-center justify-center p-6">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl rounded-3xl overflow-hidden  bg-white">
        
        {/* Left Side - Image */}
        <div className="hidden lg:flex flex-1 bg-[#7EC1B1] items-center justify-center p-12">
          <img
            src={forgotpassword}
            alt="Forgot Password Illustration"
            className="w-full h-full max-w-xl object-contain"
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex flex-col justify-center px-12 py-16 lg:py-24">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#263138] text-center mb-6">
              Forgot Password?
            </h2>
            <p className="text-gray-600 mb-12 text-center">
              Please enter your registered email to continue.
            </p>

            <form className="space-y-6" onSubmit={handleGetOtp}>
              {/* Email Input */}
              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-700 font-medium"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="yourname@example.com"
                  className={`w-full px-6 py-5 bg-gray-100 border rounded-xl focus:outline-none focus:ring-4 transition ${
                    error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#7EC1B1]"
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
              </div>

              {/* Get OTP Button */}
              <button
                type="submit"
                className="block w-full bg-[#7EC1B1] text-white py-5 rounded-xl text-center font-semibold hover:bg-[#68a998] transition"
              >
                Get OTP
              </button>
            </form>

            {/* Footer Link */}
            <div className="text-center text-gray-500 mt-10">
              Remember password?
              <a
                href="/"
                className="text-blue-500 hover:underline ml-2 font-medium"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
