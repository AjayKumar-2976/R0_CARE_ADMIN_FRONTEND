import React, { useState } from "react";
import Header2 from "../../../components/superAdmin/header/Header2";

const AddVendor = () => {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleAdd = () => {
    console.log({ fullName, company, phone, address });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <Header2 />

      {/* Form */}
      <div className="bg-white p-6 shadow-lg flex flex-col gap-8 w-full h-full">
        {/* Top Row: Full Name & Company */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Full Name Field */}
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
            />
          </div>

          {/* Company Field */}
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              Company
            </label>
            <input
              type="text"
              placeholder="Enter Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
            />
          </div>
        </div>

        {/* Bottom Row: Phone & Address */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Phone Field */}
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
            />
          </div>

          {/* Address Field */}
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-poppins font-medium text-gray-700 text-[16px]">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-3 border border-[#606060] bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7EC1B1]"
            />
          </div>
        </div>

        {/* Add Button */}
        <div className="flex justify-center w-full mt-6">
          <button
            onClick={handleAdd}
            className="bg-[#7EC1B1] text-white font-poppins font-semibold px-6 py-3 rounded-lg hover:bg-[#65a89d] transition w-full md:w-1/8"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVendor;
